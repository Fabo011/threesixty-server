import express, {Request, Response} from 'express';
import customer from '../models/customer';
const router = express.Router();
//import nodemailer from 'nodemailer';


router.post('/api/inquiry', async(req: Request, res: Response)=>{

          const data = req.body;

          try {

              const Customers = new customer({
                   firstname: data.firstname,
                   lastname: data.lastname,
                   email: data.email,
                   number: data.number,
                   Budget: data.Budget,
                   ProjectChoice: data.ProjectChoice,
                   CompanieBranche: data.CompanieBranche,
                   ProjectDescription: data.ProjectDescription,
              });
              await Customers.save();


              ///////////////////mail

                 /*  const transporter = nodemailer.createTransport({
                     service: 'gmail',
                     auth:{
                         user: 'threesixty.webdevelopers@gmail.com',
                         pass: process.env.GMAIL,
                     }
                 });
             
                     const mailList= [
                         data.email,
                     ];
             
                 const mailOptions={
                       from: data.email,
                       to: 'threesixty.webdevelopers@gmail.com', 
                       subject: 'threesixty-webdevelopers Anfrage',
                       text: `   
                       Dein Register-Verify-Code für die Email ${data.email} ist: ${data.number}
                       Gib den Code ein und du kannst sofort loslegen. Vielen Dank. Dein LernplattformX Team
                              `,
                 };
             
                 transporter.sendMail(mailOptions, (err, info)=>{
                     if (err) {
                         console.log(err);
                         res.status(401).send('fail Mail')
                       } else {
                         console.log('Email sent: ' + info.response);
                       };
                 });
     
     
*/

              //////////////////////////

              res.status(200).send('Success');
              
          } catch (error) {
              res.status(400).send('Fail');
          };


});

export default router;