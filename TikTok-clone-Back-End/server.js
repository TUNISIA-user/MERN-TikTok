import express from 'express';
import mongoose from 'mongoose';
import Videos from './dbModel.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import User from './userModel.js'; // Adjust the path if necessary
import asyncHandler from "express-async-handler"

// App configuration
const app = express();
const PORT = 5000;

// Database connection
const connectionUrl = 'mongodb+srv://admin:rZ3ai6sNuXDZVaAu@cluster0.kuql1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Middleware
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}));
    
app.use(express.json({ limit: '50mb' })); // Increase size limit
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// this user 

app.post('/registerUser', async (req, res) => {
    try {
        const { username, email, password, imgUrl, bio } = req.body;

        // // Validate request body
        // if (!username || !email || !password || !imgUrl || !bio) {
        //     return res.status(400).json({ message: 'Missing required fields' });
        // }

        // Hash the password and save user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, imgUrl, bio });
        const savedUser = await newUser.save();

        // Return user details including _id
        res.status(201).json({
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            imgUrl: savedUser.imgUrl
        });
        

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});




// ferch username 
app.get("/get__all__users",async(req,res)=>{
    try{
         const Data  = await User.find()
         
         res.status(200).send(Data);
    }
    catch(eror){
    
        console.error(`Error fetching data: ${eror}`);
        res.status(500).send(eror);

    }
})








// API Endpoints
app.get("/", (req, res) => {
    res.status(200).send(`MongoDB running on port ${PORT}`);
});

// Fetch all videos
app.get("/v1/posts", async (req, res) => {
    try {
        const dataFromDatabase = await Videos.find();
        res.status(200).send(dataFromDatabase);
    } catch (err) {
        console.error(`Error fetching data: ${err}`);
        res.status(500).send(err);
    }
});

// Create a new video
// app.post("/v2/posts", async (req, res) => {
//     try {
//         const data = await Videos.create(req.body);
//         res.status(201).send(data);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

app.post("/v2/posts/:id", async (req, res) => {
    try {
        // Extract fields from request body
        const { url, channel, desc, song, like1 = 0, message = 0, share = 0, comments = [], img1, userId } = req.body;

        // Check if user exists     
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new post
        const newPost = new Videos({
            url,
            channel,
            desc,
            song,
            like1,
            message,
            share,
            comments,
            img1,
            user: req.params.id, // Link the post to the user
        });

        // Save the post to the database
        const savedPost = await newPost.save();
        console.log(savedPost);
        res.status(201).json({ message: 'Post created successfully', post: savedPost });

    } catch (err) {
        console.error('Error creating post:', err.message);
        res.status(500).json({ message: 'Error creating post', error: err.message });
    }
});














































// Fetch videos by channel
    app.get("/v2/posts", async (req, res) => {
        try {
            const data = await Videos.find();
            res.status(200).send(data);
        } catch (err) {
            res.status(500).json({ message: "Internal server error", error: err });
            console.error(`Error fetching data: ${err}`);
        }
    });

// add comment to video by channel
// app.put("/v3/posts/:channel", async (req, res) => {
//     try {
//         const updatedData = await Videos.updateMany(
//             { channel: req.params.channel },
//             { $set: req.body }
//         );

//         if (updatedData.matchedCount === 0) {
//             return res.status(404).json({ message: "No data found for this channel" });
//         }

//         res.status(200).json({ message: "Data updated successfully", updatedCount: updatedData.modifiedCount });
//     } catch (err) {
//         console.error(`Error updating data: ${err.message}`);
//         res.status(500).json({ message: "Error updating data", error: err });
//     }
// });

// app.put("/v3/posts/:id", async (req, res) => {
//     try {
//         // Extract comment details from the request body
//         const { text, userId } = req.body;

//         // Update the video (or post) with the specified id by adding a new comment
//         const updatedData = await Videos.updateMany(
//             { _id: req.params.id }, // Find the video (or post) with the matching ID
//             { $push: { comments: { text, user: req.params.id, createdAt: new Date() } } } // Push new comment into the "comments" array
//         );

//         // Check if the update was successful
//         if (updatedData.nModified === 1) {
//             res.status(200).json({ message: "Comment added successfully", updatedData });
//         } else {
//             res.status(404).json({ message: "Post not found or no changes made" });
//         }
//     } catch (error) {
//         console.error("Error updating post:", error);
//         res.status(500).json({ message: "An error occurred", error: error.message });
//     }
// });

 


app.put("/v3/posts/:id", asyncHandler(async (req, res, next) => {
    try {
        // Find the video by ID
        const video = await Videos.findById(req.params.id);

        // Check if the video exists
        if (!video) {
            res.status(404);
            throw new Error('Video not found');
        }

        // Extract the comment text and user ID from the request body
        const { text, user } = req.body;

        // Update the video by adding the new comment
        const updatedData = await Videos.updateOne(
            { _id: req.params.id },
            { $push: { comments: { text : text, user: user, createdAt: new Date() } } }
            
        );
 // my session end here 
        // Send the updated video or a success message as a response
        res.status(200).json({ message: 'Comment added successfully', updatedData });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}));




// Fetch videos by channel (new posts)
app.get("/v4/newpost/:channel", async (req, res) => {
    try {
        const data = await Videos.find({ channel: req.params.channel });
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
        console.error(`Error fetching data: ${err}`);
    }
});



app.get("/v5/fetchPost/:id",async(req,res)=>{
    try{
        const data = await User.findById(req.params.id);
        res.status(200).send(data);
    }
    catch(eror){
        res.status(500).json({ message: "Internal server error", error: err });
        console.error(`Error fetching data: ${err}`);
    }
})

 
app.get('/commentUser', async (req, res) => {
    try {
        // Find videos where the 'user' field matches the given userId
        const videos = await Videos.find()
        .populate({
            path: 'comments.user', // Populate the 'user' field inside comments
            select: 'username', // Select additional fields as needed
        });
    
        if (videos.length === 0) {
            return res.status(404).json({ message: "No videos found for this user" });
        }

        // Send the videos data along with the populated usernames
        res.status(200).json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
