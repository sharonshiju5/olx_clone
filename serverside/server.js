import express from "express"
import env from "dotenv"
import connection from "./connection.js";
env.config()


const app=express();
app.use(express.static("../clientside"))

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started http://localhost:${process.env.PORT}`);
        
    })
})