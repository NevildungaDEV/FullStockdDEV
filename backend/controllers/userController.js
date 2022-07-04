const ErrorHunder = require('../utils/errorhander');
const asyncErrors = require('../middleware/asyncErrors');


const users = require('../models/userModel');
const { send } = require('express/lib/response');
const sendToken = require('../utils/jwtToken');
// register a User
exports.registerUser = asyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const Users = await Users.create({
        name, email, password,
        avntar: {
            public_id: "this is a saple 1",
            url: "profilepicurl"
        },
    })
    sendToken(users,201,res)
})



// login Users

exports.loginUser=asyncErrors(async(req,res,next)=>{
    const{email,password}=req.body;

    if(!email || !password){
        return next(new ErrorHunder('pls enter email and password',400))
    }
    const puser =await users.findOne({email}).select("+password")
    console.log(users)
    if (!puser){
        return next(new ErrorHunder(401,'invalid email and password'))
    }
    const isPasswordMatched= await puser.comparePassword()
    if (!isPasswordMatched){
        return next(new ErrorHunder(401,'invalid email and password'))
    }
   sendToken(users,200,res)
})