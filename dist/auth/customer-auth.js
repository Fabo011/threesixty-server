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
router.post('/api/authenticate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        ///////Random verify code
        function getNumber(max) {
            return Math.floor(Math.random() * max);
        }
        ;
        const code = getNumber(100000000);
        /////verify User
        const user = yield customer_1.default.findOne({ email: data.email });
        if (!user)
            return res.status(400).send('Wrong');
        if (user.firstname === data.name) {
            //save code to user
            yield user.updateOne({ code: code });
            ///////////////////mail
            //english Mail
            if (data.language === 'En') {
                const transporter = nodemailer_1.default.createTransport({
                    host: "threesixty-webdevelopers.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "email@threesixty-webdevelopers.com",
                        pass: process.env.SMTPMAIL,
                    },
                });
                const mailOptions = {
                    from: "email@threesixty-webdevelopers.com",
                    to: user.email,
                    subject: 'threesixty-webdevelopers Verify-Code',
                    text: `Hi ${user.firstname},  

Your threesixty-webdevelopers Verify-Code for the email ${user.email} is:
${code}.

If you don´t responsible for this request, please reply this email.

best regards
Your threesixty-webdevelopers Team
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
                res.status(200).send('OK');
                //German Mail
            }
            else {
                /*  const transporter = nodemailer.createTransport({
                    host: "threesixty-webdevelopers.com",
                    port: 465,
                    secure: true,
                    auth: {
                      user: "email@threesixty-webdevelopers.com",
                      pass: process.env.SMTPMAIL,
                    },
                });
  
                const mailOptions={
                      from: "email@threesixty-webdevelopers.com",
                      to: user.email,
                      subject: 'threesixty-webdevelopers Verify-Code',
                      text: `Servus ${user.firstname},
  
  Dein threesixty-webdevelopers Verify-Code für die email ${user.email} ist:
  ${code}.
  
  Sollten Sie keinen Verify-Code angefordert haben, bitte senden Sie uns umgehend eine Re: E-Mail dass Sie dies nicht angefordert haben.
  
  Freundliche Grüße
  Dein threesixty-webdevelopers Team
  https://www.threesixty-webdevelopers.com
                             `,
                    attachments:[
                      {
                        filename: "logo.png",
                        path: "images/logo.png"
                      }
                    ]
                };
            
                transporter.sendMail(mailOptions, (err, info)=>{
                    if (err) {
                        console.log(err);
                        res.status(401).send('fail Mail')
                      } else {
                        console.log('Email sent: ' + info.response);
                      };
                });*/
            }
            ;
            res.status(200).send('OK');
        }
        else {
            res.status(400).send('Wrong');
        }
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
