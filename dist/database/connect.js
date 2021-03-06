"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require('mongoose');
require('dotenv').config();
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
        console.log('Successfully connected to database threesixty');
    }).catch((err) => {
        console.log(err);
    });
});
module.exports = connection;
