let mongoose = require('mongoose');

// const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
// const database = 'fcc-Mail';      // REPLACE WITH YOUR DB NAME
const connectionUrl = 'mongodb://Tenant:tenant@cluster0.rhhsm.mongodb.net/Tenants'
class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(connectionUrl)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()