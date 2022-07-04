const app = require('./app')

const dotenv = require('dotenv');

// uncaught expception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutthing down the server to uncaught exception`)
    process.exit(1)
})

dotenv.config({path:'backend/config/config.env'})
const DB = require('./config/database')

app.listen(process.env.PORT, () => {
    console.log(`server running at port number 4000`)
});

// unhandle promise 
process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server`)
    Server.close(()=>{
        process.exit(1);
    })
})