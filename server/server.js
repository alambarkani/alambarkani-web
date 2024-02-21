import express from "express";
import "dotenv/config";
import connectDb from "./db/conn.js";
import userRoute from "./routes/user-routes.js";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.use("/api", userRoute);

app.listen(port, () => {
    connectDb();
    console.log("Server started on port 3000");
});