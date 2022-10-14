const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    });
    console.log("Connect Successfully!");
  } catch (error) {
    console.log("Failed Connect");
  }
};

module.exports = { connect };
