import mongoose  from "mongoose";

const customerSchema = new mongoose.Schema({
    
    spec: {type: String},
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, unique: false},
    number: {type: String},
    Budget: {type: String},
    ProjectChoice: {type: String},
    CompanieBranche: {type: String},
    ProjectDescription: {type: String},

    //customer center
    code: {type: Number},

});

const customer = mongoose.model('customerInquiry', customerSchema);

export default customer;