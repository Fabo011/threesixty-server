import express, {Request, Response} from 'express';
import customer from '../models/customer';
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';

router.use(cookieParser());
router.use(cors({origin : "http://localhost:5050", credentials: true,}))
router.post('/api/check', async(req: Request, res: Response)=>{

       const data= req.body;

       try {

        const user = await customer.findOne({email: data.email});
        if(!user) return res.status(400).send('No valid user');
        
        const payload={
            id: user.email
        };
        const expire = 60 * 60 * 24 * 1 * 1000;

        const TheSecret:any= process.env.JWTPRIVAT;
        const token = jwt.sign(payload, TheSecret);
        res.cookie('access_token', token, {
        maxAge: expire,
        httpOnly: true,
        domain: 'localhost:5050',
        sameSite: false,  
        });  
       
         
          res.status(200).end();
        
       } catch (error) {
          if(error){console.log(error);};
       };

});

export default router;