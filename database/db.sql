-- Created Database

CREATE DATABASE crudnodejs;--Esta sentencia la utilizamos para crear la base de datos.

-- using the database
USE crudnodejs;--Esta sentencia para seleccionar la base de datos que vamos a utilizar.

--creating a table

CREATE TABLE customers(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCHAR(5) NOT NULL
);

--tp show all table

SHOW TABLES;

--TO DESCRIBE TO TABLE
DESCRIBE customers;