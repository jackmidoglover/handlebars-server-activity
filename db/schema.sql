CREATE DATABASE wow_servers;
USE wow_servers; 

CREATE TABLE servers 
(
    id int NOT NULL AUTO_INCREMENT,
    server_name varchar(255) NOT NULL,
    region varchar(255) NOT NULL, 
    server_population int NOT NULL,
    server_status varchar(255) DEFAULT 'ONLINE',
    PRIMARY KEY (id)
);