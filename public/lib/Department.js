const mysql = require('mysql2');
const conn = require('../../db/connection.js');

class Department {

  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  getdepartments(){
    const getdpt = new conn
    const db = getdpt.getconnection()
    db.query('SELECT * FROM department', function (err, results) {
      const structDatas = results
      //console.table(results)
     return structDatas
      //start()
    });
    
  }

getName(){
  return  {
      type: 'input',
      name: 'name',
      message: 'Whats the department name?',
      validate(value) {
        const pass = value;
        if (value.length >= 2) {
          return true;
        }
        return 'Please add your name to you can continue with the next question';
      }
    }
}

// create uuid and return it.
getid(){
  let variablenumber = 0
  const getdpt = new conn
    const db = getdpt.getconnection()
    db.query('SELECT * FROM department', function (err, results) {
      const structDatas = results
      //console.log(structDatas.length)
      variablenumber = (structDatas.length + 1);
      //console.table(variablenumber )
     return variablenumber
      //start()
    });

  }

 

}
module.exports = Department;
 


