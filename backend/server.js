import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config' 



//app config
const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user",userRouter)


app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

//mongodb+srv://ushagotame000:U3S_fJGcDmx2!B=@cluster0.j9omzp5.mongodb.net/retryWrites=true&w=majority&appName=Cluster0
