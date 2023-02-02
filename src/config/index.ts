import mongoose from 'mongoose'
import dotenv from 'dotenv'

const connectMongoDB = async ()=>{
  mongoose.set("strictQuery", false);
 const connect = await mongoose.connect(process.env.MONGO_DB_URL!)
 console.log(`Connection to MONGODB is successful`)
}

export default connectMongoDB