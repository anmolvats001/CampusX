import express from "express"
import cors from "cors"
import compression from "compression";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import inchargeRouter from "./routes/inchargeRoute.js";
import userRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoute.js";
import postRouter from "./routes/postRoute.js";

const app = express();
connectDb();
connectCloudinary();
app.use(cors());
app.use(compression());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use("/api/incharge",inchargeRouter);
app.use("/api/user",userRouter);
app.use("/api/admin",adminRouter);
app.use("/api/post",postRouter);
app.get("/",(req,res)=>{
    res.send("api working");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));