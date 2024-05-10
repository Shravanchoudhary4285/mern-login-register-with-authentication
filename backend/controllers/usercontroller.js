const usermodel = require("../Models/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const nodemailer = require("nodemailer");

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  const data = await usermodel.findOne({ email: email });
  const hashpassword = await bcrypt.hash(password, 10);
  try {
    if (!name || !email || !password) {
      res.send({
        message: "Please Required All Field",
      });
    } else if (data) {
      res.send({
        message: "User Already Axist",
      });
    } else {
      await usermodel.create({
        name: name,
        email: email,
        password: hashpassword,
      });

      res.send({
        status: true,
        message: "User Register Successfull",
      });
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong",
    });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await usermodel.findOne({ email: email });
  try {
    if (!user) {
      res.send({
        message: "Invalid User",
      });
    } else if (user) {
      const matchpassword = await bcrypt.compare(password, user.password);
      if (matchpassword) {
        const token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.SECRET_KEY,
          {
            expiresIn: "10d",
          }
        );
        res.send({
          status: true,
          user: user,
          token: token,
          message: "Login Successfull",
        });
      } else {
        res.send({
          message: "Password Does Not Match",
        });
      }
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong In Login",
    });
  }
};

const GetUser = async (req, res) => {
  try {
    const user = await usermodel.find();
    if (user) {
      res.send({
        user: user,
        message: "data get successfully",
      });
    } else {
      res.send({
        message: "data not  gated",
      });
    }
  } catch {
    res.send({
      message: "Something Went Wrong In data get",
    });
  }
};

module.exports = { Register, Login, GetUser };
