import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
const app = express();

// Cl6NMySIkVQOPZjk


const url = "mongodb://localhost:27017/";

app.use(cors);
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use("/users",userRouter); //http://localhost:3000/users/signup

app.get("/", (req, res) => {
    console.log("api hit");
    res.send("api working");
})


mongoose
.connect(url)
.then(() => {
    app.listen(5000, () => {
        console.log("connected to server")
    })
})
.catch((error)=>{console.log("couldnt connect")});
