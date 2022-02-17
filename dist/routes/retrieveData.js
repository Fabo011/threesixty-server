"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const likeComments_1 = __importDefault(require("../models/likeComments"));
router.get('/api/retrieve/data', (req, res) => {
    try {
        likeComments_1.default.find({}, (err, data) => {
            if (err)
                throw err;
            res.json(data);
        });
    }
    catch (error) {
        console.log(error);
    }
    ;
});
exports.default = router;
