const jwt = require("jsonwebtoken");
require("dotenv").config();

const VerifyToken = async (req, res, next) => {
  let header = req.headers["authorization"];
  const token = header.split(" ")[1];
  if (!token) {
    res.send({
      message: "token not found",
    });
  } else {
    jwt.verify(token, process.env.SECRET_KEY,(err,result)=>{
      if (err) {
        res.send({
          status:401,
          message: "token Expired Please Login Again",
        });
      } else {
        next();
      }
    });
    
  }
};
module.exports = VerifyToken;
