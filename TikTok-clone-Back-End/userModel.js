
// userModel.js
import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imgUrl: { type: String },
    bio: { type: String },
    Messages:{type:String}
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
    