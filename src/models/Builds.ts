import mongoose from "mongoose";
import League from "./LeaguesInfo";

const itemSchema = {
  linkUnique: {
    type: String,
    required: true,
  },
  nameUnique: {
    type: String,
    required: true,
  },
};

const BuildSchema = new mongoose.Schema({
  leagueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: League.collection.name,
    required: [true, "League ID must be specified"],
  },
  cardImage: {
    type: String,
    require: true,
  },
  ascendancy: {
    type: String,
    require: true,
  },
  buildName: {
    type: String,
    require: true,
  },
  patchName: {
    type: String,
    require: true,
  },
  bossDamage: {
    type: String,
    require: true,
  },
  clearSpeed: {
    type: String,
    require: true,
  },
  survability: {
    type: String,
    require: true,
  },
  leagueMechanic: {
    type: String,
    require: true,
  },
  pro: {
    type: String,
    require: true,
  },
  cons: {
    type: String,
    require: true,
  },
  investment: {
    type: String,
    require: true,
  },
  exaltedPng: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  youtubeGameplay: {
    type: String,
    require: true,
  },
  items: {
    type: [itemSchema],
    _id: false,
  },
});

const Build = mongoose.model("Build", BuildSchema);

export default Build;
