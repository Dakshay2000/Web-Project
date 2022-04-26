// 1. node wcat.js filepath => Displays the contents of a file in a terminal


//2. node wcat.js filepath1 filepath2 filepath3 => Displays the content of all
//   files in terminal in concatinated form in given order
//   node wcat.js f1.txt
//   node wcat.js f1.txt f2.txt f3.txt

//3. node wcat.js -n file1 file2 file3 OR -n file1

const fs = require("fs");

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let filesArr = [];
let optionsArr = [];
for (let i = 0; i < inputArr.length; i++) 
{
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") 
    {
        optionsArr.push(inputArr[i]);
    }
    else
    {
        filesArr.push(inputArr[i]);
    }
}

// console.log("files to be read are " + filesArr);

for (let i = 0; i < filesArr.length; i++) 
{
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist)
    {
        console.log(filesArr[i] + " File does not exists.");
        return;
    }
}

let content = "";
for (let i = 0; i < filesArr.length; i++) 
{
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\n";
}

console.log(content);


//"Split" in string
var str = "Hello my name is dakshay.";
console.log(str);
var a = str.split(" "); //Split helps in dividing the string on the basis of argument and puts them in an array.
console.log(a);