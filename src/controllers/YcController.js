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
};

module.exports = YcController;
