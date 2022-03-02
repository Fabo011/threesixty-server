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
router.post('/api/like', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        if (data.spec == 'companySoftware') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'companySoftware' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'webApp') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'webApp' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'mobileApp') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'mobileApp' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'cyberSec') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'cyberSec' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'backend') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'backend' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'pwa') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'pwa' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'nativeApp') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'nativeApp' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'desktopApp') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'desktopApp' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'cloud') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'cloud' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'responsive') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'responsive' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'single') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'single' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'database') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'database' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        else if (data.spec == 'frontend') {
            const TheLike = yield likeComments_1.default.findOne({ spec: 'frontend' });
            const thelike = 1;
            let num1 = TheLike.like;
            let num2 = thelike;
            const result = num1 + num2;
            yield TheLike.updateOne({
                like: result,
                spec: data.spec
            });
        }
        res.status(200).send('Success');
    }
    catch (error) {
        console.log(error);
        res.status(400).send('Fail');
    }
    ;
}));
exports.default = router;
