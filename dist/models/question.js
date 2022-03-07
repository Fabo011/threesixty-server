"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const customerSchema = new mongoose_1.default.Schema({
    spec: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    number: { type: String },
    message: { type: String },
});
const customerQuest = mongoose_1.default.model('customerQuestion', customerSchema);
exports.default = customerQuest;
