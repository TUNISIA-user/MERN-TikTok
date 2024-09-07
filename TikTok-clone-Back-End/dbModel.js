import mongoose from 'mongoose';
 
import User from './userModel.js'; // Import the User model if needed



 

const tiktokSchema = new mongoose.Schema({
    url: { type: String },
    channel: { type: String },
    desc: { type: String },
    song: { type: String },
    like1: { type: Number, default: 0 },
    message: { type: String, default: 0 },
    share: { type: Number, default: 0 },
    comments: [{
        text: { type: String },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        //get name user here        
         // name__user : {type : String}
         createdAt : {type:Date,default:Date.now()},   
         
    }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    img1: { type: String },
    
}, { timestamps: true });

const Videos = mongoose.model('TikTokVideo', tiktokSchema);

export default Videos;

 