const mongoose = require('mongoose');
require('dotenv').config();


const connection = async()=>{

await mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>{
        console.log('Successfully connected to database threesixty');
}).catch((err)=>{
        console.log(err);
});

};

module.exports= connection;