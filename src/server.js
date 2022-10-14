const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// routes
const routes = require("./routes");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server start at PORT ${PORT}`);
});
