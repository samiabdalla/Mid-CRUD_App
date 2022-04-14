const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = "CRUD_Serverless";
const url = "mongodb://localhost:27017";
const mongoOptions = {useNewURLParser : true}

const state = {
  db : null
};

const connect = (cb) =>{
  if(state.db)
    cb(err);
  else{
    state.dbn = client.db(dbname);
    cb();
  }
}

const getPrimaryKey = (_id)=>{
  return ObjectID(_id);
}
