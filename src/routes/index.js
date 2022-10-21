const router = require("express").Router();
const cors = require("cors");
const ZingRoute = require("./api/ZingRoute");
const AlbumYcRoute = require("./api/AlbumYc");

// zing route
router.use("/api", cors(), ZingRoute);

// album Yc route
router.use("/api/album-yc", cors(), AlbumYcRoute);

// route return file index.html
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// route not found
router.get("*", (req, res) => {
  res.json({
    error: -1,
    msg: "Không tìm thấy đường dẫn!",
  });
});

module.exports = router;
