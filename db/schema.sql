CREATE DATABASE wow_servers;
USE wow_servers; 

CREATE TABLE servers 
(
    id int NOT NULL AUTO_INCREMENT,
    server_name varchar(255) NOT NULL,
    region varchar(255) NOT NULL, 
    server_population int NOT NULL,
    server_online boolean DEFAULT true,
    PRIMARY KEY (id)
);

-- Notice that server_online is a boolean, not a string of "online" or "offline" --