import express from 'express';
import mongoose from 'mongoose';
import Videos from './dbModel.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import User from './userModel.js'; // Adjust the path if necessary

 
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



app.post("/v2/posts", async (req, res) => {
    try {
        const { url, channel, desc, song, like1 = 0, message = 0, share = 0, comments = [], img1, userId } = req.body;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new video document
        const video = new Videos({
            url,
            channel,
            desc,
            song,
            like1,
            message,
            share,
            comments,
            user: user._id, // Use the user's _id for the reference
            img1,
        });

        // Save the video document
        const data = await video.save();
        res.status(201).send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error', error: err.message });
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

// Update videos by channel
app.put("/v3/posts/:channel", async (req, res) => {
    try {
        const updatedData = await Videos.updateMany(
            { channel: req.params.channel },
            { $set: req.body }
        );

        if (updatedData.matchedCount === 0) {
            return res.status(404).json({ message: "No data found for this channel" });
        }

        res.status(200).json({ message: "Data updated successfully", updatedCount: updatedData.modifiedCount });
    } catch (err) {
        console.error(`Error updating data: ${err.message}`);
        res.status(500).json({ message: "Error updating data", error: err });
    }
});

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
 
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
