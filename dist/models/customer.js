"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const customerSchema = new mongoose_1.default.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    number: { type: String },
    Budget: { type: String },
    ProjectChoice: { type: String },
    CompanieBranche: { type: String },
    ProjectDescription: { type: String },
});
const customer = mongoose_1.default.model('customerInquiry', customerSchema);
exports.default = customer;
