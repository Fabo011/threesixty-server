import express, {Request, Response} from 'express';
import customer from '../models/customer';
const router = express.Router();
import nodemailer from 'nodemailer';


router.post('/api/inquiry', async(req: Request, res: Response)=>{

          const data = req.body;
          console.log(data);  
          

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

                   const transporter = nodemailer.createTransport({
                     service: 'gmail',
                     auth:{
                         user: 'threesixty.webdevelopers@gmail.com',
                         pass: process.env.GMAIL,
                     } 
                 });
             
                     const mailList= [
                         data.email,
                         "email@threesixty-webdevelopers.com"
                     ];
             
                 const mailOptions={
                       from: "email@threesixty-webdevelopers.com",
                       to: mailList, 
                       subject: 'threesixty-webdevelopers Anfrage',
                       text: `   
                              Wir bei threesixty-webdevelopers bestätigen deine Anfrage. Wir werden Ihre Anfrage so schnell wie möglich beantworten.
                              Vielen Dank
                              Deine Software Agentur
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
     
     


              //////////////////////////

              res.status(200).send('Success');
              
          } catch (error) {
              res.status(400).send('Fail');
          };


});

export default router;