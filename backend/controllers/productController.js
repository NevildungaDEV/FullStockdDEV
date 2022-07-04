const Products =require('../models/productModels');
const ErrorHunder = require('../utils/errorhander');
const asyncErrors =require('../middleware/asyncErrors');
const apifeatures = require('../utils/apifeatures');




//ADMIN produts
exports.createProduct= asyncErrors (async(req,res,body)=>{
    const products=await Products.create(req.body);
    res.status(201).json({
        success:true,
        products
    })
})


//all produts
exports.getAllProducts= asyncErrors (async(req,res)=>{
    const resultPerPage=8;
    const productCount=await products.countDocuments();
   const Apifeatures=new apifeatures(Products.find(),req.query).search().filter().pagination(resultPerPage);
    const products =await apifeatures.query;
    res.status(200).json({
        success:true,
        products,
        productCount,
    })
})

// all product detalis
exports.getProductDetails=asyncErrors (async(req,res,next)=>{
    const product = await Products.findById(req.params.id)
    if(!product){
        return next(new ErrorHunder('prodect not found',404) )
    }
    res.status(200).json({
        success:true,
        product,
        productCount,
    })
  
})

//admin update
exports.updateProducts = asyncErrors (async(req,res,next)=>{

   
    let product= await Products.findById(req.params.id)
    if(!product){
        return next(new ErrorHunder('prodect not found',404) )
    }
    product = await Products.findByIdAndUpdate(req.params.id, res.req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
     });
     res.status(201).json({
        success: true,
        product,
      });
})


// delete product
exports.deleteProduct =asyncErrors (async (req,res,next)=>{
    
   
    const product=await Products.findById(req.params.id);
    if(!product){
        return next(new ErrorHunder('prodect not found',404) )
    }
    // if(!product){
    //     return res.status(500).json({
    //         success:false,
    //         message:'product not found'
    //     })
    // }
    // await product.remove();
    res.status(200).json({
        success:true,
        message:"product delete"
    })
})