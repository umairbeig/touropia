import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router1 from "./router/userRouter.js";
import bodyParser from "body-parser";
const app = express();

const url = "mongodb+srv://umairbeig:Cl6NMySIkVQOPZjk@cluster-tour-app.4jwauri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-tour-app"

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());
app.use("/users",router1); //http://localhost:3000/users/signup

mongoose
.connect(url)
.then(() => {
    
    app.listen(5000, () => {
        console.log("connected to server");
    })
})
.catch((error)=>{console.log(error.message)});