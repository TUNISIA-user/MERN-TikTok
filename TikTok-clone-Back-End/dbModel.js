import mongoose from 'mongoose';
import User from './userModel.js';

// Define the comment schema
const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },   Ensure this line exists
}, { timestamps: true });

// Define the TikTok video schema
const tiktokSchema = new mongoose.Schema({
    url: { type: String, required: true },  // Ensure the URL is required
    channel: { type: String, required: true },  // Ensure the channel name is required
    desc: { type: String },
    song: { type: String },
    like1: { type: Number, default: 0 },
    message: { type: Number, default: 0 },
    share: { type: Number, default: 0 },
    comments: [commentSchema],  // Embed the comments schema
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Link the video to a user
    img1: { type: String },
}, { timestamps: true });

// Create the model from the schema
const Videos = mongoose.model('TikTokVideo', tiktokSchema);

export default Videos;  // Use default export if it's the primary export

// crete other table 