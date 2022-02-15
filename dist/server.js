"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 6060;
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
///////////////////////////////////////////////////////
//Security
//////////////////////////////////////////////////////
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const helmet_1 = __importDefault(require("helmet"));
app.use(helmet_1.default.permittedCrossDomainPolicies());
app.use(helmet_1.default.noSniff());
app.use(helmet_1.default.xssFilter());
app.use(helmet_1.default.ieNoOpen());
app.use(helmet_1.default.dnsPrefetchControl());
app.use(helmet_1.default.expectCt());
app.use(helmet_1.default.frameguard());
app.use(helmet_1.default.referrerPolicy());
app.use(helmet_1.default.hidePoweredBy());
app.use(helmet_1.default.hsts());
app.use((0, express_mongo_sanitize_1.default)());
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Database
////////////////////////////////////////////////////////
const connect_1 = __importDefault(require("./database/connect"));
(0, connect_1.default)();
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//neccessary
/////////////////////////////////////////////////////
app.use(express_1.default.json({ limit: "5kb" }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true, limit: "5kb" }));
app.use((0, cors_1.default)());
/////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//api
//////////////////////////////////////////////////////
const inquiry_1 = __importDefault(require("./routes/inquiry"));
app.use('/', inquiry_1.default);
/////////////////////////////////////////////////////////
app.listen(port, () => console.log(`listen on http://localhost:${port}`));
