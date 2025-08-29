const express=require("express");
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
require("dotenv").config(
    {
        path: "./config/.env"
    }
)
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});