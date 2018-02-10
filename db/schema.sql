###Data Schema


CREATE DATABASE restaurant_POS_db;

USE restaurant_POS_db;

CREATE TABLE new_orders 
(
	id int NOT NULL AUTO_INCREMENT,
	table_number int NOT NULL,
	server_number int NOT NULL,
	food_items varchar(200) NOT NULL,
	notes varchar(200),
	order_complete BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


CREATE TABLE completed_orders
(
	id int NOT NULL AUTO_INCREMENT,
	table_number int NOT NULL,
	server_number int NOT NULL,
	food_items varchar(200) NOT NULL,
	notes varchar(200),
	order_complete BOOLEAN DEFAULT true,
	order_id int(10) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (order_id) REFERENCES new_orders(id)

);



