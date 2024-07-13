import express from "express";
import mongoose from "mongoose";
import router from "./routes/user_routes.js";

const app = express();

app.use("/api/user", router);

mongoose.connect("mongodb+srv://admin:admin@cluster0.khoy9gv.mongodb.net/socialmedia?retryWrites=true&w=majority&appName=Cluster0").then(() => app.listen(5005)).then(() => console.log("Connected to Database and Listening to Localhost 5005")).catch((err) => console.log(err));