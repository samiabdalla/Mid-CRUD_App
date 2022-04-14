const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require("./dbConnect");
const collection = "todo";

db.connect((err)=>{
  if(err) {
    console.log('Unable to connect to database');
    process.exit(1);
  }
  else{
    app.listen(3000,()=>{
      console.log('Connected to database, listening now...')
    });
  }
})
