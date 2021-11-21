import { Schema } from "mongoose";

export const AuthSchema = new Schema({
    
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true
    }
);