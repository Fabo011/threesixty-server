"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likeComments_1 = __importDefault(require("../models/likeComments"));
const router = express_1.default.Router();
const moment_1 = __importDefault(require("moment"));
router.post('/api/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    try {
        const date = (0, moment_1.default)().format('llll');
        console.log(date);
        const SetComment = new likeComments_1.default({
            user: data.user,
            comment: data.comment,
            spec: data.spec,
            date: date
        });
        yield SetComment.save();
        res.status(200).send('Success');
    }
    catch (error) {
        console.log(error);
        res.status(400).send('Fail');
    }
    ;
}));
exports.default = router;
