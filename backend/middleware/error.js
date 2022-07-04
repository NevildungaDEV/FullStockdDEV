const ErrorHandler = require('../utils/errorhander')

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "internal server error"
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })


    // mongoID error
    if(err.name === "Casterror") {
        const message = `Resource not found. invalid:${err.path}`;
        err=new ErrorHandler(message,400)
    }

    res.status(err.statuscode).json({
        success: false,
        nessage: err.message,
       
    })
    console.log(err)


}

