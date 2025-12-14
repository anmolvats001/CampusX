import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import inchargeRouter from "./routes/inchargeRoute.js";
import userRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
connectDb();
connectCloudinary();
app.use(cors());
app.use(express.json());
app.use("/api/incharge",inchargeRouter);
app.use("/api/user",userRouter);
app.use("/api/admin",adminRouter);
app.get("/",(req,res)=>{
    res.send("api working");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));