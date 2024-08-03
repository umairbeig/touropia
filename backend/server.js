import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

// Cl6NMySIkVQOPZjk


const url = "mongodb+srv://umairbeig:Cl6NMySIkVQOPZjk@cluster-tour-app.4jwauri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-tour-app";

app.use(cors);

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
