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
    try {
        const specValue = 'Anfrage';
        const Customers = new customer_1.default({
            spec: specValue,
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
            host: "threesixty-webdevelopers.com",
            port: 465,
            secure: true,
            auth: {
                user: "email@threesixty-webdevelopers.com",
                pass: process.env.SMTPMAIL,
            },
        });
        const mailList = [
            data.email,
            "email@threesixty-webdevelopers.com"
        ];
        const mailOptions = {
            from: "email@threesixty-webdevelopers.com",
            to: mailList,
            subject: 'threesixty-webdevelopers Anfrage',
            text: `Servus ${data.firstname},  

hiermit Best??tigen wir deine Anfrage bei threesixty-webdevelopers. Wir bedanken uns f??r dein Vertrauen, deine
Anfrage wird so schnell wie m??glich bearbeitet.

Freundliche Gr????e
Dein threesixty-webdevelopers Team
https://www.threesixty-webdevelopers.com
                              `,
            attachments: [
                {
                    filename: "logo.png",
                    path: "images/logo.png"
                }
            ]
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
