const mongoose = require("mongoose");

const SongModel = new mongoose.Schema(
  {
    encodeId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    artistsNames: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    thumbnailM: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: Number,
      required: true,
    },
    link_mp3: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("songs", SongModel);
