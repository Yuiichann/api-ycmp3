const express = require("express");
const YcController = require("../../controllers/YcController");
const router = express.Router();

router.get("/", YcController.getAll);

router.get("/song", YcController.getOne);

module.exports = router;
