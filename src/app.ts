import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// Import Leagues Routes
import Builds from "../src/routes/builds";
import Leagues from "../src/routes/leagues";
// import Leagues info Routes

dotenv.config();
const app = express();
app.use(bodyParser.json());

const dbConnection = process.env.DB_CONNECTION;
if (!dbConnection) {
  throw new Error("Erorare...");
}
console.log(dbConnection);
// Middlewares League
app.use(cors());

// Middlewares League Info
app.use("/leagues", Leagues); // Separate route for legionInfo
// app.use("/metamorphInfo", metamorphInfoRoute); // Separate route for metamorphInfo
app.use("/builds", Builds);
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
