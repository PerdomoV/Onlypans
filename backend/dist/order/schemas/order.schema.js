"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
    address: { type: String, required: true },
    price: { type: String, required: true },
}, {
    timestamps: true
});
//# sourceMappingURL=order.schema.js.map