const mongoose = require("mongoose");
const connection = mongoose
  .connect(
    `mongodb+srv://shravan:12345@cluster0.nvdi1br.mongodb.net/authentication
  `
  )
  .then(() => {
    console.log("Mongoodb Database Connected");
  })
  .catch((err) => {
    console.log("Database Disconnected", err);
  });
module.exports = connection;
