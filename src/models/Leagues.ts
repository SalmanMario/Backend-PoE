import mongoose from "mongoose";

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

const PostSchema = new mongoose.Schema({
  cardImage: {
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

const League = mongoose.model("League", PostSchema);

export default League;
