import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://bajpaisaksham183:H5QmgcfIifQZEvDI@cluster0.gtzu0p9.mongodb.net/tomato?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("DB connected"))
}

//mongodb+srv://bajpaisaksham183:H5QmgcfIifQZEvDI@cluster0.mongodb.net/tomato?retryWrites=true&w=majority
