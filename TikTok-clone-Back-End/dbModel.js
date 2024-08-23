import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: String
}, { timestamps: true });

const tiktokSchema = new mongoose.Schema({
    url: String,
    channel: String,
    desc: String,
    song: String,
    like1: Number,
    message: Number,
    share: Number,
    comments: [commentSchema],
    // add new champ here 
    img1:String ,
    
}, { timestamps: true });

export default mongoose.model('tiktokVideos', tiktokSchema);