const mongoose = require('mongoose');

const server = '0.0.0.0:27017';
const db = 'Fighter-Bot';

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
            console.log(err);
           console.error('Database connection error')
         })
    }
  }
  
  module.exports = new Database()

  