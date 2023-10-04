const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/contacts_list_db');

const db = mongoose.connection;

db.on('error' , console.error.bind(console , "Error connecting to DB."));

db.once('open' , function(){
 console.log('Succesfully Connected to DataBase.')
});