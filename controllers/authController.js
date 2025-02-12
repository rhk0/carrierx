import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Register User (Hash password before saving)
const registerUser = async (req, res) => {
    const { firstName, lastName, mobileNumber, email, nationality, dob, gender, occupation, experience, website, password } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            mobileNumber,
            email,
            nationality,
            dob,
            gender,
            occupation,
            experience,
            website,
            password: hashedPassword, // Save hashed password
        });

        if (user) {
            res.status(201).json({
               success:true,message:"User Created Successfully...!",user
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Login User (Check hashed password)
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.json({
            success:true,
            message:"User Login Successfully...!",
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export { registerUser, loginUser };
