import express, {Request, Response} from 'express';
import likeComm from '../models/likeComments';
const router = express.Router();
import moment from 'moment';


router.post('/api/comments', async(req: Request, res: Response)=>{

          const data = req.body;
          console.log(data);
          
          try {
                const date = moment().format('llll'); 
                console.log(date);
                             
 
                 const SetComment = new likeComm({
                     user: data.user,
                     comment: data.comment,
                     spec: data.spec,
                     date: date
                 });
                 await SetComment.save();
            
               res.status(200).send('Success');
                
          } catch (error) {
              console.log(error);
              res.status(400).send('Fail');
          };


});

export default router;