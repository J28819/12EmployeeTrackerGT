
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  
  }

getfirst_name(){
  return  {
      type: 'input',
      name: 'name',
      message: 'Whats your name?',
      validate(value) {
        const pass = value;
        if (value.length >= 2) {
          return true;
        }
        return 'Please add your name to you can continue with the next question';
      }
    }
}

getlast_name(){
  return  {
      type: 'input',
      name: 'name',
      message: 'Whats your name?',
      validate(value) {
        const pass = value;
        if (value.length >= 2) {
          return true;
        }
        return 'Please add your name to you can continue with the next question';
      }
    }
}

getrole_id(){
  return  {
      type: 'input',
      name: 'name',
      message: 'Whats your name?',
      validate(value) {
        const pass = value;
        if (value.length >= 2) {
          return true;
        }
        return 'Please add your name to you can continue with the next question';
      }
    }
}


getmanager_id(){
  return  {
      type: 'input',
      name: 'name',
      message: 'Whats your name?',
      validate(value) {
        const pass = value;
        if (value.length >= 2) {
          return true;
        }
        return 'Please add your name to you can continue with the next question';
      }
    }
}



}
module.exports = Employee;
 


