import mongoose from 'mongoose';
import User from './userModel.js';

// Define comment schema with a reference to the User model
const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
}, { timestamps: true });

// Define TikTok video schema
const tiktokSchema = new mongoose.Schema({
    url: { type: String, required: true },
    channel: { type: String, required: true },
    desc: { type: String, required: true },
    song: { type: String },
    like1: { type: Number, default: 0 },
    message: { type: Number, default: 0 },
    share: { type: Number, default: 0 },
    comments: [commentSchema], // Embed the comment schema
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
    img1: { type: String },
}, { timestamps: true });

const Videos = mongoose.model('TikTokVideo', tiktokSchema);

export default Videos;







#add function here 










const videoId = 'someVideoId'; // Replace with actual video ID
const userId = 'someUserId'; // Replace with actual user ID

Videos.findById(videoId)
  .populate({
    path: 'comments.user', // Populate the user details in the comments
    match: { _id: userId } // Filter comments by user ID
  })
  .exec((err, video) => {
    if (err) {
      console.error(err);
    } else {
      console.log(video.comments); // Comments made by the specified user
    }
  });





// ignore 

// Example route in your Express.js server
app.get('/v4/newpost/:token', async (req, res) => {
    try {
        const token = req.params.token;
        const videos = await Videos.find({ token })
            .populate('comments.user', 'name'); // Populate the user field in the comments with the user's name
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});




# comp 


import React, { useEffect, useState } from 'react';
import './CommonetSection.css';
import CardCommt from './CardCommt';
import { Nahdi_Gayth } from '../context/GlobalContext';
import axios from './axios';

const CommonetSection = ({ commt }) => {
    const Move = Nahdi_Gayth();
    const [input, setInput] = useState("");
    const [actullay, setActullay] = useState([]); // This holds all data
    const [new1, setNew1] = useState([]); 

    const handleData = async (e) => {
        e.preventDefault();
        try {
            const Token = Move.channel;
            const commentText = input;

            const response2 = await axios.get(`/v4/newpost/${Token}`);
            const allComments = response2.data.flatMap(item => item.comments || []);
            console.log(allComments);

            const response = await axios.put(`/v3/posts/${Token}`, {
                comments: [...allComments, { text: commentText }]
            });

            const finalResult = await axios.get(`/v4/newpost/${Token}`);
            const x = finalResult.data.flatMap(item => item.comments || []);
            setActullay(x);
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

    const test = Move.toogle;
    useEffect(() => {
        setNew1(commt);
    }, [commt]);

    return (
        <div className='CommonetSection' style={test === false ? { display: 'none' } : { display: 'block' }}>
            <div className='search__bar__for__comment'>
                <div className="Message">
                    <input title="Write Message" id='search__message' tabIndex="i" pattern="\d+" placeholder="Message.." className="MsgInput" type="text" onChange={(e) => setInput(e.target.value)} value={input} />
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet" className="SendSVG" onClick={handleData}>
                        <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#ffffff70" stroke="none">
                            <path d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"></path>
                        </g>
                    </svg>
                    <span className="l"></span>
                </div>
            </div>

            <div className='remove__section' onClick={() => {
                Move.dispatch({
                    type: "SET__TOOGLE__FALSE"
                });
            }}>X</div>

            <div className='CommonetSection__insde'>
                {actullay && actullay.length > 0 ? (
                    actullay.map((comment, index) => (
                        <CardCommt
                            key={index}
                            commet={comment.text || "No Comment Text"}
                            username={comment.user?.name || "Anonymous"} // Use the populated user name
                            img={'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'}
                            time={comment.createdAt}
                        />
                    ))
                ) : (
                    <p>{new1.length > 0 ?
                        new1.map((item, index) =>
                            <CardCommt
                                key={index}
                                commet={item.text || "No Comment Text"}
                                username={item.user?.name || "Anonymous"} // Use the populated user name
                                img={'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'}
                                time={item.createdAt}
                            />
                        )
                        :
                        <div className='FalseComment'>
                            <div className="terminal-loader">
                                <div className="terminal-header">
                                    <div className="terminal-title"><a href='https://github.com/TUNISIA-user' style={{ textDecoration: "none", color: "#fff" }}> @Nahdi</a></div>
                                    <div className="terminal-controls">
                                        <div className="control close"></div>
                                        <div className="control minimize"></div>
                                        <div className="control maximize"></div>
                                    </div>
                                </div>
                                <div className="text">post comment</div>
                            </div>
                        </div>
                    }</p>
                )}
            </div>
        </div>
    );
};

export default CommonetSection;





# 


import Videos from './tiktokSchema.js';

const videoId = "66d504428aa7ad06c329c82f"; // example video ID

async function getVideoWithComments(videoId) {
    try {
        const video = await Videos.findById(videoId)
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    model: 'User'
                }
            })
            .exec();
        console.log(video);
    } catch (error) {
        console.error('Error fetching video with comments:', error);
    }
}

getVideoWithComments(videoId);




const updatedData = await Videos.updateMany(
    { channel: req.params.channel },
    { $push: { comments: { $each: req.body.comments } } } / 
);
documentation  // $each method f        
$each exepmle : 
const arr = [1,2,3]
const number = 4
const newArr = [...arr,number]
// this aim for this $each method
// this for sommoth the comments


  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });      // the awsome thing 
  }, []);

label htmlFor='file'>Upload an image</label>


