import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import BookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;


const allowedOrigins = ['http://localhost:8888', 'http://localhost:5173', 'https://bistrobliss-bacckend.onrender.com', 'https://bistro-bliss-frontend-dusky.vercel.app'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", function (req, res) {
  res.send("Hello World");
});

BookingRoutes(app)
contactRoutes(app)

app.listen(PORT, (req, res) => {
  mongoose.connect(MONGOURL).then(() => console.log("Connected!"));
});
