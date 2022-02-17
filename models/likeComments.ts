import mongoose  from "mongoose";

const likeCommentSchema = new mongoose.Schema({
    
    spec: {type: String},
    like: {type: Number},
    comment: {type: String},
    user: {type: String},
    date: {type: String}

});

const likeComm = mongoose.model('likeAndComment', likeCommentSchema);

export default likeComm;