const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.JSON());
const path = require('path');

const db = require("./db");
const collection = "todo";
