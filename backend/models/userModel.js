const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require ('bcryptjs')
const jwt =require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "plser enter your name"],
        maxlength: [30, "30 characters only"],
        minlength: [4, "4 characters req"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

})

// pass hashing
userSchema.pre('save',async function(next){
    if (!this.isModified("password")){
        next()
    }
    this.password= await bcrypt.hash(this.password,12)
})
// JWT Token
userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECKEY,{
        expiresIn:process.env.SECKEY_EXP
    })
}

// comp password
userSchema.methods.comparePassword= async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}
module.exports=mongoose.model("Users",userSchema)