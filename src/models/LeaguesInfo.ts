import mongoose from "mongoose";

const leagueInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
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

const leagueInfo = mongoose.model("Leagues", leagueInfoSchema);

export default leagueInfo;
