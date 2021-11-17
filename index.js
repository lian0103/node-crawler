"use strict";
require("dotenv").config();
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 3008;

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/crawlerRoute"));

app.use(require("./routes/defaultRoute")); 

app.listen(port, () => {
  console.log(`line-bot-dopee listening on ${port}`);
});
