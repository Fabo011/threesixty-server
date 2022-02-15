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
const nodemailer_1 = __importDefault(require("nodemailer"));
router.post('/api/inquiry', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    try {
        const Customers = new customer_1.default({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            number: data.number,
            Budget: data.Budget,
            ProjectChoice: data.ProjectChoice,
            CompanieBranche: data.CompanieBranche,
            ProjectDescription: data.ProjectDescription,
        });
        yield Customers.save();
        ///////////////////mail
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'threesixty.webdevelopers@gmail.com',
                pass: process.env.GMAIL,
            }
        });
        const mailList = [
            data.email,
            "email@threesixty-webdevelopers.com"
        ];
        const mailOptions = {
            from: "email@threesixty-webdevelopers.com",
            to: mailList,
            subject: 'threesixty-webdevelopers Anfrage',
            text: `   
                              Wir bei threesixty-webdevelopers bestätigen deine Anfrage. Wir werden Ihre Anfrage so schnell wie möglich beantworten.
                              Vielen Dank
                              Deine Software Agentur
                              `,
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                res.status(401).send('fail Mail');
            }
            else {
                console.log('Email sent: ' + info.response);
            }
            ;
        });
        //////////////////////////
        res.status(200).send('Success');
    }
    catch (error) {
        res.status(400).send('Fail');
    }
    ;
}));
exports.default = router;
