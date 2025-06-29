import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute  from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";



dotenv.config({});

connectDB();

const app = express();

const PORT  = process.env.PORT || 3000;
// default middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

// api routes

app.use("/api/v1/user",userRoute)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});