//File System Module
// const { Console } = require("console");
const fs = require("fs"); //Imports fs module

// let res = fs.appendFileSync("Projects/Node/f1.txt","Hello I am f1 file."); //This line will create a f1.txt file and then it will add "Hello I am f1 file.".
// fs.appendFileSync("Projects/Node/f1.txt","\nYou guyz are smart."); //This line will add "You guyz are smart."

// let data = fs.readFileSync("Projects/Node/f1.txt","utf-8");
// console.log(data);

let ans = require("../Practice/Practice.js");
let final = ans.add(2,5);
console.log(final);