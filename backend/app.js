const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./Models/Connection");
const userrouter = require("./Routing/routing");
const cors = require("cors");
const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());
app.use("/", userrouter);
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
