import express from "express";
import mongoose from "mongoose";
import Videos from "./dbModel.js";
import cors from "cors";

// App config 
const app = express();
const Port  = 5000;

// Database connection
const connection_url = 'mongodb+srv://admin:rZ3ai6sNuXDZVaAu@cluster0.kuql1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middlewares
const corsOptions = {
    origin: 'https://3000-tunisiauser-merntiktok-gxvju7fb0y6.ws-eu115.gitpod.io',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptions));
app.options('*', cors()); // Handle preflight requests
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// API endpoints
app.get("/", (req, res) => res.status(200).send(`MongoDB connected on port ${Port}`));

app.get("/v1/posts", async (req, res) => {
    try {
        const data = await Videos.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/v2/posts", async (req, res) => {
    try {
        const data = await Videos.create(req.body);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/v2/posts", async (req, res) => {
    try {
        const data = await Videos.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
});

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
        res.status(500).json({ message: "Error updating data", error: err });
    }
});

app.get("/v4/newpost/:channel", async (req, res) => {
    try {
        const data = await Videos.find({ channel: req.params.channel });
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
});

// Server listen
app.listen(Port, () => console.log(`Listening on localhost:${Port}`));
