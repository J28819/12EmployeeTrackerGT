-- Insert multiple produce items --
INSERT INTO department (id, name)
VALUES
    ( 1, "Maintenance"),
    ( 2, "Operations"),
    ( 3, "Sales");
  
    

-- Insert multiple produce items --
INSERT INTO role (id, title, salary, department_id)
VALUES
    ( 1, "Mechanic", 250.4, 1),
    ( 2, "Agent", 250.4, 3),
    ( 3, "Operator", 250.4, 2);
   
    
    
-- Insert multiple produce items --
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    ( 1, "Ismael", "Leal", 1, 1),
    ( 2, "Valery", "Perez", 2, 2),
    ( 3, "Robert", "Mendoza", 3, 3);
    
    