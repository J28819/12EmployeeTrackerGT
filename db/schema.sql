DROP DATABASE IF EXISTS  companyx_db;
CREATE DATABASE companyx_db;

USE companyx_db;

CREATE TABLE department (
  id INT NOT NULL,
  department VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary FLOAT NOT NULL,
  department_id INT NOT NULL
);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  manager_name VARCHAR(30) NOT NULL
);
