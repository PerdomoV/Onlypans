"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: Number,
    urlToImage: { type: String, required: true },
}, {
    timestamps: true
});
//# sourceMappingURL=product.schema.js.map