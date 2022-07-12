const mongoose = require('mongoose');

const server = 'localhost:27017';
const db = 'dash_app';

class Database {
    constructor() {
      this._connect()
    }
    
  _connect() {
       mongoose.connect(`mongodb://${server}/${db}`)
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }
  
  module.exports = new Database()