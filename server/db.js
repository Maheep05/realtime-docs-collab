const mongoose = require("mongoose");

const connectionURL = mongoose.connect(
  "mongodb+srv://admin:<password>@cluster0.imfrvq4.mongodb.net/google-docs"
);

module.exports = connectionURL;