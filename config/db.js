const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017').on('open',()=>{
    console.log("db connected");
}).on('error',()=>{
        console.log("conection failed");
    });

module.exports = connection;