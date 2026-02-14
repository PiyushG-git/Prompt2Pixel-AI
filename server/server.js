import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";

console.log("Starting server file...");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.use('/api/user',userRouter)
app.get("/", (req, res) => {
  res.send("API Working");
});



app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});


// mongodb+srv://Prompt2PixelAI:Prompt2PixelAI123@cluster0.qez71h6.mongodb.net/?appName=Cluster0