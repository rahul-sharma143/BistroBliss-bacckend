import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import BookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;

app.get("/", function (req, res) {
  res.send("Hello World");
});

BookingRoutes(app)
contactRoutes(app)

app.listen(PORT, (req, res) => {
  mongoose.connect(MONGOURL).then(() => console.log("Connected!"));
});
