const router = require("express").Router();
const cors = require("cors");
const ZingRoute = require("./api/ZingRoute");
const AlbumYcRoute = require("./api/AlbumYc");

router.use("/api", cors(), ZingRoute);

router.use("/api/album-yc", cors(), AlbumYcRoute);

router.get("/", (req, res) => {
  res.send("API YC MP3");
});

router.get("*", (req, res) => {
  res.json({
    error: -1,
    msg: "Không tìm thấy đường dẫn!",
  });
});

module.exports = router;
