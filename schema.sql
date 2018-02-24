-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(100) NOT NULL,
    -- Makes a string column called "department_name" --
  department_name VARCHAR(50),
  -- Makes an numeric column called "item_price" --
  item_price REAL(10, 2),
  -- Makes an numeric column called "stock_quantity" --
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);