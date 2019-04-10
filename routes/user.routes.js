const users = require('express').Router();
const mongoose = require('mongoose');
mongodb = require('mongodb').MongoClient;
const url =  "mongodb://localhost:27017/myuser";
require('../models/User')
const User = mongoose.model('users');


users.get('/getUser', (req, res) => {
    mongodb.connect(url, (err, client) => {
      if (err) {
        console.log('Error in connecting to mongodb - > ', err);
      } else {
        const db = client.db('myuser');
        db.collection('user').find({}).sort({
          $natural: -1
        }).toArray((err, docs) => {
          if (err) {
            console.log('Error in getting tickets from mongodb - > ', err);
          } else {
            res.json(docs)
          }
        });
      }
    });
  });

  users.post('/storeUser', (req,res,next)=>{
    console.log("insde store user")
  })
  
  module.exports = users;