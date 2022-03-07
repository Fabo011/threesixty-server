import mongoose  from "mongoose";

const customerSchema = new mongoose.Schema({
    
    spec: {type: String},
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    number: {type: String},
    message: {type: String},

});

const customerQuest = mongoose.model('customerQuestion', customerSchema);

export default customerQuest;