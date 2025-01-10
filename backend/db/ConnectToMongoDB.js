import mongoose from "mongoose";

const ConnectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB")     
  } catch (error) {
    console.log("Error Connecting to mongodb ", error.message)
  }
}

export default ConnectToMongoDB;