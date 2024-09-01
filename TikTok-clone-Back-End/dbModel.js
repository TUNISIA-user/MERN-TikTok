// dbModel.js
import mongoose from 'mongoose';
import User from './userModel.js'
// Define schemas and model
const commentSchema = new mongoose.Schema({
    text: { type: String }
}, { timestamps: true });

const tiktokSchema = new mongoose.Schema({
    url: { type: String },
    channel: { type: String },
    desc: { type: String },
    song: { type: String },
    like1: { type: Number, default: 0 },
    message: { type: Number, default: 0 },
    share: { type: Number, default: 0 },
    comments: [commentSchema],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    img1: { type: String },
}, { timestamps: true });

const Videos = mongoose.model('TikTokVideo', tiktokSchema);

export default Videos  // Use named export if you're using this style
