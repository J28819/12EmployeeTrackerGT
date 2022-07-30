-- Insert multiple produce items --
INSERT INTO department (id, department)
VALUES
    ( 0, "Maintenance"),
    ( 1, "Quality"),
    ( 2, "Operations"),
    ( 3, "Engineering"),
    ( 4, "Sales");
  
    

-- Insert multiple produce items --
INSERT INTO role (id, title, salary, department_id)
VALUES
    ( 0, "Electrician", 75000, 0),
    ( 1, "Electrician", 65000, 0),
    ( 2, "Mechanic", 57000.4, 0),
    ( 3, "Supervisor", 57000.4, 1),
    ( 4, "Operator", 47000.4, 2),
    ( 5, "Process", 97000.4, 3),
    ( 6, "Agent", 77000.4, 4);
   
    
    
-- Insert multiple produce items --
INSERT INTO employee (id, first_name, last_name, role_id, manager_id, manager_name)
VALUES
    ( 0, "Robert", "Markz", 0, 0, "Sarah"),
    ( 1, "Valery", "Perez", 0, 1, "Sarah"),
    ( 2, "Robert", "Mendoza",4 , 2, "Nick");
    ( 3, "Robert", "Mendoza",3 , 3, "Thomas");
    ( 4, "Robert", "Mendoza",2 , 4, "Rick");
    ( 5, "Robert", "Mendoza",5 , 5, "Thomas");
    ( 6, "Robert", "Mendoza",6 , 6, "Kevin");
    
    