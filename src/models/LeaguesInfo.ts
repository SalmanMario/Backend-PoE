import mongoose from "mongoose";

const leagueInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  linkTrailer: {
    type: String,
    require: true,
  },
  leagueImg: {
    type: String,
    require: true,
  },
  releaseDate: {
    type: String,
    require: true,
  },
  endDate: {
    type: String,
    require: true,
  },
});

const League = mongoose.model("League", leagueInfoSchema);
console.log("Collection Name",League.collection.name);
export default League;
