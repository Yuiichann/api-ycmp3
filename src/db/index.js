const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://duybinh1357:binh01203937750@ycmp3.m1lf1rn.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUniFiedTopology: true,
      }
    );
    console.log("Connect Successfully!");
  } catch (error) {
    console.log("Failed Connect");
  }
};

module.exports = { connect };
