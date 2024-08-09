import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userModel from "../models/User.js"


const secret = "test";

export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const oldUser = await userModel.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await userModel.create(
            {
                email,
                password: hashedPassword,
                name: `${firstName} ${lastName}`

            }
        );

        const token = jwt.sign(
            { email: result.email, password: hashedPassword, id: result._id },
            secret, { expiresIn: "1h" }
        )

        res.status(201).json({ result, token });

    }
    catch (error) {
        res.status(500).json({ message: "Something Went Wrong" });
        console.log(error);

    }
}
export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            res.status(400).json({ message: "user doesnt exixt" });
            return
        }

        const correctPassword = await bcrypt.compare(password, user.password);
        if (correctPassword) {
            console.log("sign in successful");
            const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });
            res.status(200).json({ user, token });
        }
        else {
            res.status(400).json({ message: "incorrect password" })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }

}