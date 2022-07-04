const express=require('express');
const app= express();
const errorMiddleware =require('./middleware/error')
app.use(express.json())

// routes
const products=require('./routes/productRoute');
const User =require("./routes/userRoute")
app.use('/api/v1',products)
app.use('/api/v1',User)

// middleware
app.use(errorMiddleware);


module.exports=app;