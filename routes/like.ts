import express, {Request, Response} from 'express';
import likeComm from '../models/likeComments';
const router = express.Router();


router.post('/api/like', async(req: Request, res: Response)=>{

          const data = req.body;
          
          try {

             if(data.spec == 'companySoftware'){
                const TheLike = await likeComm.findOne({spec: 'companySoftware'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });

             }else if(data.spec == 'webApp'){
                const TheLike = await likeComm.findOne({spec: 'webApp'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'mobileApp'){
                const TheLike = await likeComm.findOne({spec: 'mobileApp'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'cyberSec'){
                const TheLike = await likeComm.findOne({spec: 'cyberSec'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'backend'){
                const TheLike = await likeComm.findOne({spec: 'backend'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'pwa'){
                const TheLike = await likeComm.findOne({spec: 'pwa'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'nativeApp'){
                const TheLike = await likeComm.findOne({spec: 'nativeApp'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'desktopApp'){
                const TheLike = await likeComm.findOne({spec: 'desktopApp'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'cloud'){
                const TheLike = await likeComm.findOne({spec: 'cloud'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'responsive'){
                const TheLike = await likeComm.findOne({spec: 'responsive'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'single'){
                const TheLike = await likeComm.findOne({spec: 'single'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'database'){
                const TheLike = await likeComm.findOne({spec: 'database'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             }else if(data.spec == 'frontend'){
                const TheLike = await likeComm.findOne({spec: 'frontend'});
                const thelike = 1;
                let num1 = TheLike.like;
                let num2 = thelike;
                const result = num1 + num2;

                await TheLike.updateOne({
                    like: result,
                    spec: data.spec
                });
             };


           
               res.status(200).send('Success');
              
              
          } catch (error) {
              console.log(error);
              res.status(400).send('Fail');
          };


});

export default router;