var chalk = require("chalk");

//var message = "Hello " + chalk.yellow("World");
var message = "what is this";
var style = chalk.green.bold.italic(message);
console.log(style);