import express from "express";

const userRouter = express.Router();

import { signin, signup } from "../controller/user.js";

userRouter.post("/signup", signup);
userRouter.post("/signin",signin);

export default userRouter;
