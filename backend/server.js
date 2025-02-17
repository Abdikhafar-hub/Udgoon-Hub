require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 10000;


const allowedOrigins = [
  "http://localhost:5173", 
  "https://udgoon-hub.vercel.app" 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


app.use(bodyParser.json()); 
app.use(express.json()); 


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));


const authRoutes = require("./routes/authRoutes");
const mpesaRoutes = require("./routes/mpesaRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/mpesa", mpesaRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to Udgoon Hub API!");
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});