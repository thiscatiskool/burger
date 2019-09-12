CREATE database if not exists burgers_db;

USE burgers_db;

CREATE table burgers(
id int not null auto_increment,
burger_name varchar(100) not null,
devoured boolean default false,
primary key (id)
);

insert into burgers (burger_name, devoured) values ("Cheeseburger", false);
insert into burgers (burger_name, devoured) values ("Bacon Double Cheeseburger", false);
insert into burgers (burger_name, devoured) values ("Buffalo Burger", false);