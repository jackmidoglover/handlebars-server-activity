var express = require("express");

var app = express();
var PORT = 3000;

// Serve static content for the app from the public directory
app.use(express.static("public"));

//  parse application/json data
app.use(express.json());

// parse application/x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }));

// configures handlebars as our view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultlayout: "main" }));
app.set("view engine", "handlebars");

// configures mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306 /* 8889 for mac users */,
    user: "root",
    password: "", /* enter your password here */
    database: "wow_servers"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting" + err.stack);
        return;
    }
    console.log("Database connected as id " + connection.threadId);
});

// Express and MySQL code should go here

// When the user first enters the / route, the index handlebars should be populated with the servers from our database

// When the user clicks a button to toggle server status, we should update the server status in our database

// Runs server
app.listen(PORT, function(){
    console.log("🦄 ===> Server listening on: http://localhost:" + PORT);
})