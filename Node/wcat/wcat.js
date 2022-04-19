// 1. node wcat.js filepath => Displays the contents of a file in a terminal


//2. node wcat.js filepath1 filepath2 filepath3 => Displays the content of all
//   files in terminal in concatinated form in given order
//   node wcat.js f1.txt
//   node wcat.js f1.txt f2.txt f3.txt

const fs = require("fs");

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let filesArr = [];
for (let i = 0; i < inputArr.length; i++) 
{
    filesArr.push(inputArr[i]);
}

// console.log("files to be read are " + filesArr);

for (let i = 0; i < filesArr.length; i++) 
{
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) 
    {
        console.log("File does not exists");
        return;
    }
}

let content = "";
for (let i = 0; i <filesArr.length; i++) 
{
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\n";
}
console.log(content);