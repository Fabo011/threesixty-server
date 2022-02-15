import mongoose  from "mongoose";

const customerSchema = new mongoose.Schema({
    
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    number: {type: String},
    Budget: {type: String},
    ProjectChoice: {type: String},
    CompanieBranche: {type: String},
    ProjectDescription: {type: String},

});

const customer = mongoose.model('customerInquiry', customerSchema);

export default customer;