import express, {Request, Response} from 'express';
import customer from '../models/question';
const router = express.Router();
import nodemailer from 'nodemailer';


router.post('/api/question', async(req: Request, res: Response)=>{

          const data = req.body;
         
          try {
            const specValue= 'Frage';

              const Customers = new customer({
                   spec: specValue,
                   firstname: data.firstname,
                   lastname: data.lastname,
                   email: data.email,
                   number: data.number,
                   message: data.message
              });
              await Customers.save();


              ///////////////////mail

                   const transporter = nodemailer.createTransport({
                     host: "threesixty-webdevelopers.com",
                     port: 465,
                     secure: true, 
                     auth: {
                       user: "email@threesixty-webdevelopers.com",
                       pass: process.env.SMTPMAIL,
                     },
                 });
             
                 const mailList= [
                      data.email,
                      "email@threesixty-webdevelopers.com"
                   ];

                 const mailOptions={
                       from: "email@threesixty-webdevelopers.com",
                       to: mailList, 
                       subject: 'threesixty-webdevelopers Anfrage',
                       text: `Servus ${data.firstname},  

hiermit Bestätigen wir deine Frage bei deinem Unternehmen. Wir bedanken uns für dein Vertrauen, deine
Frage wird so schnell wie möglich bearbeitet.

Freundliche Grüße

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
                 });
     
     


              //////////////////////////

              res.status(200).send('Success');
              
          } catch (error) {
              res.status(400).send('Fail');
          };


});

export default router;