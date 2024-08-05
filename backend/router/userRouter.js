import express from "express"



const userRouter=express.Router();



import { signup } from "../controller/user.js";

userRouter.post("/signup",signup);
export default userRouter;
