import express, {Request, Response} from 'express';
import customer from '../models/customer';
const router = express.Router();
import nodemailer from 'nodemailer';

router.post('/api/authenticate', async(req: Request, res: Response)=>{

       const data= req.body;

       try {
        ///////Random verify code
        function getNumber(max: any){
          return Math.floor(Math.random() *max);
        };
        const code:number = getNumber(100000000);
         
        /////verify User
        const user = await customer.findOne({email: data.email});
        if(!user) return res.status(400).send('No valid user');
        

         if(user.firstname === data.name){
              //save code to user
          
              await user.updateOne({code: code});
            
                ///////////////////mail
               //english Mail
              if(data.language === 'En'){

                const transporter = nodemailer.createTransport({
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
                    text: `Hi ${user.firstname},  

Your Verify-Code for the email ${user.email} is:
${code}.

If you don´t responsible for this request, please reply this email.

best regards

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

              res.status(200).send('OK');

              //German Mail
              }else{

                const transporter = nodemailer.createTransport({
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

Dein Verify-Code für die email ${user.email} ist:
${code}.

Sollten Sie keinen Verify-Code angefordert haben, bitte senden Sie uns umgehend eine Re: E-Mail dass Sie dies nicht angefordert haben.

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
            };
            
    
            res.status(200).send('OK');


               
         }else{
           res.status(400).send('Wrong');
         }
       } catch (error) {
          if(error) {console.log(error);};
       };

});
export default router;