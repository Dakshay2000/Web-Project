
let helpFunc = require("./Commands/help")
console.log(helpFunc.help());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command)
{
    case "tree":
        //call tree function
        console.log("tree function called and executed succesfully on path " + path);
        break;
    
    case "organize":
        //call organize function
        break;

    case "help":
        //call help function
        break;

    default:
        console.log("Command not recognized :/");
        break;
}