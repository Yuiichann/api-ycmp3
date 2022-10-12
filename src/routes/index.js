const router = require("express").Router();
const cors = require("cors");
const ZingRoute = require("./api/ZingRoute");
const AlbumYcRoute = require("./api/AlbumYc");

router.use("/api", cors(), ZingRoute);

router.use("/api/album-yc", cors(), AlbumYcRoute);

module.exports = router;
