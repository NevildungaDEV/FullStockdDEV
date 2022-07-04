// const cookieParser = require("cookie-parser");


const sendToken =(user,stusCode,res)=>{
    const token =user.getJWTToken();

    // Cookies
    const options = {
        expires:new Date(
            Date.now()+process.env.COOKIE_EXP*24*60*1000
        ),
        httpOnly:true,
    }
    res.status(stusCode).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
}
module.exports =sendToken