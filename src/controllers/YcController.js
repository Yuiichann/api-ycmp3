const fs = require("fs");
const songModel = require("../models/songModel");

const YcController = {
  getAll: async (req, res) => {
    try {
      const songs = await songModel.find({});

      res.json({
        msg: "Success",
        data: songs,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: -1, msg: "Internal Server Error!" });
    }
  },

  getOne: async (req, res) => {
    try {
      const songID = req.query.id;

      if (!songID) {
        return res.status(400).json({ error: -1, msg: "Bad Request!" });
      }

      const song = await songModel.findOne({ encodeId: songID });

      if (!song) {
        return res
          .status(200)
          .json({ error: 0, msg: "Không tìm thấy bài hát" });
      }

      return res.json({ msg: "Success", data: song });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: -1, msg: "Internal Server Error!" });
    }
  },

  addSong: async (req, res) => {
    const {
      encodeId,
      title,
      artistsNames,
      duration,
      link_mp3,
      releaseDate,
      thumbnail,
      thumbnailM,
    } = req.body;

    if (
      !encodeId ||
      !title ||
      !artistsNames ||
      !duration ||
      !link_mp3 ||
      !releaseDate ||
      !thumbnail ||
      !thumbnailM
    ) {
      return res.status(400).json({ error: -1, msg: "Không đủ thông tin" });
    }

    try {
      const newSong = await songModel({
        encodeId,
        title,
        artistsNames,
        duration,
        link_mp3,
        releaseDate,
        thumbnail,
        thumbnailM,
      });

      await newSong.save();

      res.json({ msg: "Success", data: newSong });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: -1, msg: "Internal Server Error!" });
    }
  },
};

module.exports = YcController;
