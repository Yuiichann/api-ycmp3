const express = require("express");
const YcController = require("../../controllers/YcController");
const router = express.Router();

router.get("/", YcController.getAll);

router.get("/song", YcController.getOne);

router.post("/addSong", YcController.addSong);

module.exports = router;
