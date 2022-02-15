import express, {Application} from 'express';
const app: Application = express();
const port = process.env.PORT || 6060;
import 'dotenv/config';
import bodyParser from 'body-parser';


///////////////////////////////////////////////////////
//Security
//////////////////////////////////////////////////////
import mongoSanitize from'express-mongo-sanitize';
import helmet from 'helmet';
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.ieNoOpen());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.referrerPolicy());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());

app.use(mongoSanitize());
///////////////////////////////////////////////////////


///////////////////////////////////////////////////////
//Database
////////////////////////////////////////////////////////
import connection from './database/connect';
connection();
////////////////////////////////////////////////////////


///////////////////////////////////////////////////////
//neccessary
/////////////////////////////////////////////////////
app.use(express.json({ limit: "5kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: "5kb"}));
/////////////////////////////////////////////////////


//////////////////////////////////////////////////////
//api
//////////////////////////////////////////////////////
import customerInquiry from './routes/inquiry';
app.use('/', customerInquiry);

/////////////////////////////////////////////////////////


app.listen(port, ()=>console.log(`listen on http://localhost:${port}`));















