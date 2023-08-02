import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(bodyParser.json());

// Import Routes
const legionRoute = require("./routes/leagues/legion");

const dbConnection = process.env.DB_CONNECTION || "default-string-value";

// Middlewares
app.use(cors());
app.use("/legion", legionRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to DB
mongoose
  .connect(dbConnection)
  .then(() => {
    console.log("Am intrat tata");
  })
  .catch((error) => {
    console.log(error);
  });

// How do we start lisening to the server
app.listen(process.env.PORT);
