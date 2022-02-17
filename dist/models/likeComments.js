"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const likeCommentSchema = new mongoose_1.default.Schema({
    spec: { type: String },
    like: { type: Number },
    comment: { type: String },
    user: { type: String }
});
const likeComm = mongoose_1.default.model('likeAndComment', likeCommentSchema);
exports.default = likeComm;
