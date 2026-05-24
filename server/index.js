import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/userRoutes.js";
import interviewRouter from "./routes/interviewRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json())
app.use(cookieParser());

app.use('/api/auth', authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/payment", paymentRouter)
const PORT = process.env.PORT || 6000;
app.listen( PORT , () => {
    console.log(`Server running on PORT ${PORT}`);
    connectDB();
})


