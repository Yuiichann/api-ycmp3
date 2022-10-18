const express = require("express");
const YcController = require("../../controllers/YcController");
const router = express.Router();

router.get("/", YcController.getAll);

router.get("/songInfo", YcController.getOne);

router.get("/song", YcController.getFileMusic);

// route post
router.post("/addSong", YcController.addSong);

module.exports = router;
