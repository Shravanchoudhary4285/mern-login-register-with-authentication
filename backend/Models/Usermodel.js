const mongoose = require("mongoose");
const userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
  },

  info: {
    type: String,
    default: Date(),
  },
});

const usermodel = mongoose.model("register_login_api", userschema);
module.exports = usermodel;
