import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, },
        lastName: { type: String, },
        mobileNumber: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        nationality: { type: String, },
        dob: { type: Date, },
        gender: { type: String, enum: ["Male", "Female", "Other"], },
        occupation: { type: String, },
        experience: { type: Number, },
        website: { type: String, default: "" },
        password: { type: String, }, 
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
