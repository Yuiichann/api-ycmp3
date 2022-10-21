const mongoose = require("mongoose");

const MusicFileModel = new mongoose.Schema(
  {
    encodeId: {
      type: String,
      required: true,
      ref: "songs",
      unique: true,
    },
    data: {
      128: {
        type: String,
      },
      312: {
        type: String,
      },
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("music_files", MusicFileModel);
