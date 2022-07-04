
const mongoose =require('mongoose');


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please Enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please Enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"please Enter product price"],
        kMaxLength:[8,"price canot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    Images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        },
    }],
    category:{
        type:String,
        required:[true,'Please enter product category']
    },
    Stock:{
        type:Number,
        required:[true,"ple enter product stock"],
        maxLength:[4,'stock cannot exceed 4'],
        default:1
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAT:{
        type:Date,
        default:Date.now
    }

})
module.exports=mongoose.model('PRODUCTS',productSchema)