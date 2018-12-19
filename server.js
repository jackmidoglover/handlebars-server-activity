var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultlayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306 /* 8889 for mac users */,
    user: "root",
    password: "", /* enter your password here */
    database: "quotes_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting" + err.stack);
        return;
    }
    console.log("Database connected as id " + connection.threadId);
});

// Express & MySQL code should go here. 

app.listen(PORT, function(){
    console.log("🦄 ===> Server listening on: http://localhost:" + PORT);
})