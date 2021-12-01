"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AuthSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'cliente' },
    address: { type: String }
}, {
    timestamps: true
});
//# sourceMappingURL=auth.schema.js.map