import mongoose from "mongoose";

const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName:"Alam_Barkani",
            autoIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch{
        console.log("Error connecting to database");
        process.exit(1);
    }
}

export default connectDb