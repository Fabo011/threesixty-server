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
const customer_1 = __importDefault(require("../models/customer"));
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
router.use((0, cookie_parser_1.default)());
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
router.post('/api/check', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    try {
        const user = yield customer_1.default.findOne({ email: data.email });
        if (!user)
            return res.status(400).send('Wrong');
        const payload = {
            id: user.email
        };
        const expire = 60 * 60 * 24 * 1 * 1000;
        const token = jsonwebtoken_1.default.sign(payload, 'wkefewrferwfjreoifoire');
        res.cookie('access_token', token, {
            maxAge: expire,
            httpOnly: true,
            domain: 'http://localhost:5050/',
            sameSite: false,
        });
        res.status(200).send('OK');
        // res.status(200).send({user, token: token});
        /* if(user.code === data.code){
            
             const payload={
                 id: user.email
             };
   
             const token = jwt.sign(payload, 'djhceveirvnervneriv');
              res.cookie('access_token', token, {
              maxAge: expire,
              httpOnly: true,
              });
              const bh= user.email;
              res.cookie('choice', bh, { maxAge: expire});
 
             //res.status(200).send('Access true');
         }else{
             res.status(400).send('Access Denaid');
         }*/
    }
    catch (error) {
        if (error) {
            console.log(error);
        }
        ;
    }
    ;
}));
exports.default = router;
