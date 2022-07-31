
//*****************************************************/
//  _ ____      __                _                   
// / |___ \    /__\ __ ___  _ __ | |_   _  ___  ___   
// | | __) |  /_\| '_ ` _ \| '_ \| | | | |/ _ \/ _ \  
// | |/ __/  //__| | | | | | |_) | | |_| |  __/  __/  
// |_|_____| \__/|_| |_| |_| .__/|_|\__, |\___|\___|  
//                         |_|      |___/             
//  _____                _                 ___  _____ 
// /__   \_ __ __ _  ___| | _____ _ __    / _ \/__   \
//   / /\/ '__/ _` |/ __| |/ / _ \ '__|  / /_\/  / /\/
//  / /  | | | (_| | (__|   <  __/ |    / /_\\  / /   
//  \/   |_|  \__,_|\___|_|\_\___|_|    \____/  \/    
//                                              
//*****************************************************/    

const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
var fs = require('fs');
const routes = require('./routes');
const app = express();
const PORT = 3001;
const path = require('path');
const Department = require('./public/lib/Department.js');
const Role = require('./public/lib/Role.js');
const Employe = require('./public/lib/Employe.js');
var Departmentcount = 0
var Departmentvalues = []
var Rolecount = 0
var Rolevalues = []
var Employeecount = 0
var Employeevalues = []
var Employeemanagers = []

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'companyx_db'
  },
  console.log(`Connected to the companyx_db database.`)
);


console.log( '---------------------------------------------------------\n');
console.log('\x1b[36m%s\x1b[0m', 'Hi, welcome to Pro 12EmployeeTrackerGT v1.0.0 by J28819   |\n');
console.log('\x1b[36m%s\x1b[0m', 'GitHub Project: https://github.com/J28819/12EmployeeTrackerGT\n');
console.log('\x1b[36m%s\x1b[0m',' ---Follow the instructions and questions to create your Team HTML file ---\n');
console.log('---------------------------------------------------------\n');


 const questions = [
  {
    type: 'list',
    name: 'Etype',
    message: '\033[0;32m\ What would you like to do?',
    choices: ["View All Departments", "View All Employees", "View All Roles", "Add Department","Add Employe", "Add Role", "Update Employee Role", "Update employee Manager", "Total Utilized Budget", "View employees by department", "View employees by Manager"]//, "Delete Departments, ],
  }
 ];

start()
function getcount(){

  Employeevalues = []
  Rolevalues = []
  Departmentvalues = []

  db.query('SELECT * FROM department', function (err, results) {
    const structDatas = results
    //console.log(structDatas.length)
    variablenumber = (structDatas.length);
    //console.table(variablenumber )
    Departmentcount =  variablenumber
    structDatas.forEach(element => {
      Departmentvalues.push(element.department)
    });
  });

  db.query('SELECT * FROM role', function (err, results) {
    const RoleDatas = results
    let variablenumber = (RoleDatas.length);
    Rolecount =  variablenumber
    RoleDatas.forEach(element => {
      Rolevalues.push(element.title)
    });
  });

  db.query('SELECT * FROM employee', function (err, results) {
    const EmployeeDatas = results
    let variablenumber = (EmployeeDatas.length);
    Employeecount =  variablenumber
    EmployeeDatas.forEach(element => {

      Employeevalues.push(element.first_name)
      if (Employeemanagers.includes(element.manager_name) == false){
        Employeemanagers.push(element.manager_name)
        console.log(Employeemanagers)
      }

    });
  });
}

function ViewAllEmployees(){
  db.query('SELECT employee.first_name, employee.last_name, department.department, employee.manager_name, role.title, role.salary FROM department JOIN role ON role.department_id = department.id JOIN employee ON role.id = employee.role_id', function (err, results) {
    //console.log(err)
    console.table(results);
    console.log("Press arrow down to continue\n")
    start()
  });
}

function ViewAllRoles(){
  // department.department, role.title, role.salary  
  db.query('SELECT * FROM department JOIN role ON department.id = role.department_id ORDER BY role.salary DESC', function (err, results) {
    console.table(results);
    console.log("Press arrow down to continue\n")
    start()
  });
 
}

function ViewAllDepartments(){
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    console.log("Press arrow down to continue\n")
    start()
  });

}

function summary(){
  db.query('SELECT department, SUM(salary) AS total_salary FROM role RIGHT JOIN department ON department.id = role.department_id GROUP BY department', function (err,res){
    console.table(res);
    console.log("Press arrow down to continue\n")
    start()
  })
}

function ViewEmpbyDpt(){
  db.query('SELECT department.department, employee.first_name, employee.last_name, employee.manager_name, role.title, role.salary FROM department JOIN role ON role.department_id = department.id JOIN employee ON role.id = employee.role_id ORDER by department', function (err, results) {
    //console.log(err)
    console.table(results);
    console.log("Press arrow down to continue\n")
    start()
  });
}

function ViewEmpbyMngr(){
  db.query('SELECT  employee.manager_name, department.department, employee.first_name, employee.last_name, role.title, role.salary FROM department JOIN role ON role.department_id = department.id JOIN employee ON role.id = employee.role_id ORDER by manager_name', function (err, results) {
    //console.log(err)
    console.table(results);
    console.log("Press arrow down to continue\n")
    start()
  });
}

function addRole(){
  const newRole = new Role()
  let questions= []
  let uuid = 0
  if (Rolecount>0){
    uuid = Rolecount + 1
  }
    uuid = Rolecount
  questions.push(newRole.getDepartmentID(Departmentvalues),newRole.getTitle(),newRole.getSalary() )
  inquirer.prompt(questions)
  .then((answers) => {
    const getindex = (element) => element === answers.Department;
    let indexval3 = Departmentvalues.findIndex(getindex);
    //console.log(indexval3)
    //console.log(Departmentvalues)
       db.query('INSERT INTO Role (id, title, salary, department_id) VALUES (?,?,?,?)', [uuid, answers.Title,answers.Salary,indexval3],(error, results) => {
     if (error) console.log(error);
     });
     console.log(`Department New Role Added  ${answers.name}\n`)
    start()
    }
  )
}

function addDepartment(){
  let uuid = 0
  if (Departmentcount>0){
    uuid = Departmentcount + 1
  }
    uuid = Departmentcount
  const newdepartment = new Department()
  let questions= []
  
  questions.push(newdepartment.getName())
  inquirer.prompt(questions)
  .then((answers) => {
    
    db.query('INSERT INTO department (id, department) VALUES (?,?)', [uuid, answers.name],(error, results) => {
     if (error) console.log(error);
     });
      console.log(`Department Added ${answers.name}\n`)
      start()
    }
  )

}

function addEmployee(){
  const newemployee = new Employe()
  let questions= []
  
  let uuid = 0
  if (Employeecount>0){
    uuid = Employeecount + 1
  }
    uuid = Employeecount
  questions.push(newemployee.getfirst_name(),newemployee.getlast_name(),newemployee.getrole_id(Rolevalues),newemployee.getmanager_id())
  inquirer.prompt(questions)
  .then((answers) => {
    const getindex = (element) => element === answers.Role_id;
    let indexval2 = Rolevalues.findIndex(getindex);
    //console.log(indexval2)
    //console.log(Rolevalues)
    db.query('INSERT INTO employee (id, first_name, last_name, role_id, manager_id, manager_name ) VALUES (?,?,?,?,?,?)', [uuid, answers.first_name, answers.last_name, indexval2, uuid, answers.Manager_name],(error, results) => {
     if (error) console.log(error);
     });
      console.log(`Employee Added ${answers.first_name}\n`)
      start()
    }
  )
}

function UpdateRole(){
  let questions = []
  const updateExistingRole = new Role()
  const updateExistingemployee = new Employe()
  questions.push(updateExistingemployee.updateEmployee(Employeevalues),updateExistingRole.updateRole(Rolevalues))
  inquirer.prompt(questions)
  .then((answers) => {
   const getindex = (element) => element === answers.NewRole;
    let indexval = Rolevalues.findIndex(getindex);
    var sql = `UPDATE employee SET role_id = ${indexval} WHERE first_name = '${answers.UpdateEmployee}'`;
    //console.log(sql)
    db.query(sql, function (err, results) {
     if(err){
      console.log(err)
     }
      console.log("Employee Role Updated\n")
      start()
    });
    }
  )
}

//Update Employee Function 
function UpdateEmployeeMngr(){
  let questions = []
  const updateExistingemployee = new Employe()
  questions.push(updateExistingemployee.updateEmployee(Employeevalues),updateExistingemployee.updateManager(Employeemanagers))
  inquirer.prompt(questions)
  .then((answers) => {
   const getindex = (element) => element === answers.UpdateManager;
    let indexval = Employeemanagers.findIndex(getindex);
    var sql = `UPDATE employee SET manager_name = '${answers.UpdateManager}' WHERE first_name = '${answers.UpdateEmployee}'`;
    //console.log(sql)
    db.query(sql, function (err, results) {
     if(err){
      console.log(err)
     }
      console.log("Employee Manager Updated\n")
      start()
    });
    }
  )
}

//Switch function to main Menu
function start(){
 getcount()
 console.log("----------Start---------\n")
 inquirer.prompt(questions).then(
  (answers) => {
    
    switch (answers.Etype) {
      case "View All Employees": {
       ViewAllEmployees()
      }
      break;
      case "View All Roles": {
        ViewAllRoles()
      }
      break;
      case "View All Departments": {
        ViewAllDepartments()
      }
      break;
      case "Add Employe": {
        addEmployee() 
      }
      break;
      case "Update Employee Role": {
        UpdateRole()
      }
      break;
      case "Add Role": {
        addRole()
      }
      break;
      case "Add Department": {
        addDepartment()
      }
      break;
      case "Total Utilized Budget": {
        summary()
      }
      break;
    //View employees by department
    case "View employees by department": {
      ViewEmpbyDpt()
      }
      break;
    //View employees by Manager
     case "View employees by Manager": {
      ViewEmpbyMngr()
      }
      break;
       //Update Eployee Manager
     case "Update employee Manager": {
      UpdateEmployeeMngr()
      }
      break;
    }
    
    }
 

 
 );

 
  }