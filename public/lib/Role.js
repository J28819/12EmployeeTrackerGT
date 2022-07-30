
class Role {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

    getTitle(){
         return {
              type: 'input',
              name: 'Title',
              message: 'Write your Title',
              validate(value) {
                const pass = value;
                if (value.length >= 2) {
                  return true;
                }
                return (`Please add your Title for this Role`);
              }
            }
        }


        updateRole(arg1){
          // console.log(arg1)
          return {
            type: 'list',
            name: 'NewRole',
            message: 'Chose the New Role from the list',
            choices: arg1,
           }
         }
        
        getSalary(){
          return {
               type: 'input',
               name: 'Salary',
               message: 'Type your Salary',
               validate(value) {
                 const pass = value;
                 //console.log(typeof pass)
                 if (isNaN(value)) {
                  return (`Please set the Salary`);
                 }
                 return true;
                 
               }
         
             }
         }

         getDepartmentID(arg1){
          //console.log(arg1)
          return {
            type: 'list',
            name: 'Department',
            message: 'Chose the Department assignated to this Role',
            choices: arg1,
           }
         }
 
  

}
module.exports = Role;
 


