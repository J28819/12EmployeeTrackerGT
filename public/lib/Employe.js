
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  
  }

getfirst_name(){
  return  {
      type: 'input',
      name: 'first_name',
      message: 'Whats your first Name?',
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
      name: 'last_name',
      message: 'Whats your Last Name?',
      validate(value) {
        const pass = value;
        if (value.length >= 2) {
          return true;
        }
        return 'Please add your name to you can continue with the next question';
      }
    }
}

// getrole_id(){
//   return  {
//       type: 'input',
//       name: 'name',
//       message: 'Whats your Role?',
//       validate(value) {
//         const pass = value;
//         if (value.length >= 2) {
//           return true;
//         }
//         return 'Please add your name to you can continue with the next question';
//       }
//     }
// }

getrole_id(Rolearg1){
  //console.log(Rolearg1)
  return {
    type: 'list',
    name: 'Role_id',
    message: 'Chose the Role from the list',
    choices: Rolearg1,
   }
 }


getmanager_id(){
  return  {
      type: 'input',
      name: 'Manager_name',
      message: 'Whats your Manager Name?',
      validate(value) {
        const pass = value;
        if (value.length >= 2) {
          return true;
        }
        return 'Please add your name to you can continue with the next question';
      }
    }
}

updateEmployee(Emparg1){
  // console.log(arg1)
  return {
    type: 'list',
    name: 'UpdateEmployee',
    message: 'Chose the Role in the list to be updated',
    choices: Emparg1,
   }
 }

 updateManager(MngrList){
  return {
    type: 'list',
    name: 'UpdateManager',
    message: 'Chose the New Manager in the list to be updated',
    choices: MngrList,
   }

 }



}
module.exports = Employee;
 


