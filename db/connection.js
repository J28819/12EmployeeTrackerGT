const mysql = require('mysql2');

class conn {
 
  getconnection(){
    const db = mysql.createConnection(
        {
          host: 'localhost',
          user: 'root',
          password: 'asdf123$',
          database: 'companyx_db'
        },
        console.log(`Connected to the companyx_db database.`)
      );
    return  db
  }

  }

  module.exports = conn;




