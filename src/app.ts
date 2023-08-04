import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// Import Leagues Routes
import builds from "../src/routes/builds/index";
// import Leagues info Routes
import legionInfoRoute from "../src/routes/leaguesInfo/legionInfo";
import metamorphInfoRoute from "../src/routes/leaguesInfo/metamorphInfo";

dotenv.config();
const app = express();
app.use(bodyParser.json());

const dbConnection = process.env.DB_CONNECTION || "default-string-value";

// Middlewares League
app.use(cors());

// Middlewares League Info
app.use("/legionInfo", legionInfoRoute); // Separate route for legionInfo
// app.use("/metamorphInfo", metamorphInfoRoute); // Separate route for metamorphInfo
app.use("/builds", builds);
// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to DB
mongoose
  .connect(dbConnection)
  .then(() => {
    // How do we start listening to the server
    app.listen(process.env.PORT);
    console.log("App running on port ", process.env.PORT);
  })
  .catch((error) => {
    console.log(error);
  });
