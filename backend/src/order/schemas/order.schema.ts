import { Schema } from "mongoose";

export const orderSchema = new Schema({
        address: { type: String, required: true },
        cost: { type: Number, required: true },
        state: { type: String, required: true },
        user_id: [{ type: Schema.Types.ObjectId, ref: 'Auth' }]
    },
    {
        timestamps: true
    }
);
