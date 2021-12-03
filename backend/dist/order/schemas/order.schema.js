"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
    address: { type: String, required: true },
    cost: { type: Number, required: true },
    state: { type: String, required: true },
    user_id: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Auth', default: " " }]
}, {
    timestamps: true
});
//# sourceMappingURL=order.schema.js.map