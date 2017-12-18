DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INT default 6,
  stock_quantity INT default 3,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Apple iPhone X 64GB Space", "electronics", 1249.00, 5), 
("ASUS ROG Zephyrus", "electronics", 2,699.00, 9), 
("PlayStation 4 Slim 1 TB Console", "electronics", 249.00, 65), 
("Bb-8 Star Wars Talking Droid", "toys", 29.45, 42), 
("Easy-Bake Ultimate Oven", "toys", 38.58, 19),
("Minion Turbo Dave Self Balancing Robot", "toys", 57.59, 27), 
("10k Solid Yellow Gold Earrings and Pendant", "jewelry", 224.99, 3), 
("Vintage Blue Sapphire Diamond Tennis Bracelet", "jewelry", 450.00, 9), 
("KitchenAid KBLS19KCMS 30 Stainless Bottom Freezer Fridge", "home", 999.00, 3), 
("Maytag Heritage MFX2876DRH 36 26.2 cu.ft. White Fridge", "home", 1,779.00, 6); 