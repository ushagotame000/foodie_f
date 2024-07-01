import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ushagotame000:mongoose000@cluster0.j9omzp5.mongodb.net/foodie"
    )
    .then(() => console.log("DB connected"));
};

export default connectDB;
