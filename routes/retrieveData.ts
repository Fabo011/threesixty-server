import express,{Response, Request} from 'express';
const router = express.Router();
import likeComm from '../models/likeComments';


router.get('/api/retrieve/data', (req: Request, res: Response)=>{

           
       try {
             likeComm.find({}, (err, data)=>{
             if(err) throw err
             res.json(data);
        });
             
       } catch (error) {
           console.log(error);
       };


});

export default router;