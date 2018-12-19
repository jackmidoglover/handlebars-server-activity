# World of Women Servers

## Introduction

> “God created dinosaurs. God destroyed dinosaurs. God created Man. Man destroyed God. Man created dinosaurs. 
> Dinosaurs eat man...Woman inherits the earth.”
> \- Ellie Sattler, Jurassic Park

Welcome to World of Women, a popular MMORPG ... involving women being badasses.

You are a front end developer tasked with creating a server status page so players can check on the status of the server they play on. This is inspired by another popular game called [WoW](https://worldofwarcraft.com/en-us/game/status)... 


## Instructions

__To begin:__ 
1. Git clone this repository to your machine
2. cd into the directory
3. npm i

__Your tasks are this:__ 
1. Create an express route for the homepage ("/") that queries the servers table and renders the index.handlebars with information about each server. Preferably each server will have its own row in a table. 
2. IF the server is online, render the world "online" in green, if it is offline, render the word "offline" in red.
3. Create a button beside each server that will toggle the server's status. If the server is online, the button should have the text "Go offline", if the server is online, the button should have the text "Go online". 
4. Then, create a route ("/api/server") that updates the server's online status. 

If you accomplish the task list above, congratulations on keeping to company values and being a badass!

If you want to get a sick raise though, here's some additional challenges: 

### Bonus 1
Instead of rendering a number in the population column, render a string of "Low", "Normal" and "High":

If a server has a population of 100,000 or less, render a string of "Low".
If a server has a population between 100,000 - 1,000,000 render a string of "Normal". 
If a server has a population above 1,000,000 render a string of "High". 

*Hint: In your server.js file, in the get route for "/" you will have to to loop through your databases results, do some logic that assesses the number returned by the population column in your database, and saves the result to a key within an object that holds the other column values from the database...

### Bonus 2
Create an input that allows visitors to add a server to the database. (Because we're cool like that, any plebeian can make a server in this game)

## Objectives

This activity is meant to help you understand how to do conditional rendering in handlebars using the handlebars {{if}} logic, as well as using the handlebars {{else}} iterator. 

It is also meant to acclimate you to a folder structure that is more similar to the MVC model (providing a public folder and a line of server logic on line 7). 

## Notes
Bootstrap, jquery, your css and your javascript files are all linked for you in main.handlebars. Package.json includes all the modules you will need to make this application work. __REMEMBER__ to configure your MySQL connection information to match your password, port, and username. __AND ALSO__ use the .sql files in the db folder to create the database and populate it.
