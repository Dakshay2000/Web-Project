// 1. node wcat.js filepath => Displays the contents of a file in a terminal.

//2. node wcat.js filepath1 filepath2 filepath3 => Displays the content of all
//   files in terminal in concatinated form in given order
//   node wcat.js f1.txt
//   node wcat.js f1.txt f2.txt f3.txt

//3. node wcat.js "-n" {FileName} => Give numbering to all the lines.

//4. node wcat.js "-b" {FileName} => Give numbering to non-empty lines.

//5. node wcat.js "-cr" {FileName} => Creates a file with a given file name.

//6. node wcat.js "-s" => Convert big line breaks into a singular line break.

//7. node wcat.js "-con" {oldFileName} {newFileName} => It copies data from given old file and creates a new file and it will paste it there.

//8. node wcat.js "-don" {oldFileNames} {newFileName} => It copies data from all the given old files and creates a new file and it will paste it there.

//9. node wcat.js "-ad" {FileName} => It adds "$" to every line(only non-empty lines).

//10. node wcat.js "-tac" {FileNames}  => It prints content of file in reverse order(like printing lines from bottom to top).

//11. node wcat.js "-re" {oldFileName} {newFileName} => For renaming a file.

//12. node wcat.js "-del" {FileName} => For deleting a file.

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

//Creating file from "-cr" command
let crisPresent = optionsArr.includes("-cr");
if (crisPresent) 
{
    fs.appendFileSync(filesArr[0],"");
    return;
}

//Copying data from old file to new file with "-con"(Copy Old New)
//Older File > Newer File
let conisPresent = optionsArr.includes("-con");
if (conisPresent) 
{
    fs.appendFileSync(filesArr[1],fs.readFileSync(filesArr[0]));
    return;
}

//Concatenating Data of all the files into new file with "-don"(Data Old New)
//Old Files > New File
let donisPresent = optionsArr.includes("-don");
if (donisPresent) 
{
    let content = "";
    for (let i = 0; i < filesArr.length - 1; i++) 
    {
        let fileContent = fs.readFileSync(filesArr[i]);
        content += fileContent + `\r\n - ${filesArr[i]} completed \r\n\r\n`;
    }
    fs.appendFileSync(filesArr[filesArr.length - 1],content);
    return;
}

//Adding "$" at the end every line with "-ad" command(Add dollar)
let adisPresent = optionsArr.includes("-ad");
if (adisPresent) 
{
    let content = "";
    for (let i = 0; i < filesArr.length; i++) 
    {
        let fileContent = fs.readFileSync(filesArr[i]);
        content += fileContent + "\r\n";
    }

    let contentArr = content.split("\r\n");
    for (let i = 0; i < contentArr.length - 1; i++) 
    {
        if (contentArr[i] != "") 
        {
            contentArr[i] = contentArr[i] + "  $";
        }
    }
    console.log(contentArr);
    return;
}

//Print data of file in reverse order with "-tac" command
let tacisPresent = optionsArr.includes("-tac");
if (tacisPresent) 
{
    let content = "";
    for (let i = 0; i < filesArr.length; i++) 
    {
        let fileContent = fs.readFileSync(filesArr[i]);
        content += fileContent + "\r\n";
    }

    let contentArr = content.split("\r\n");
    for (let i = contentArr.length - 1; i >= 0; i--) 
    {
        console.log(contentArr[i]);
    }
    return;
}

//Renaming the existing file with "-re" command
let reisPresent = optionsArr.includes("-re");
if (reisPresent) 
{
    fs.renameSync(filesArr[0],filesArr[1]);
    return;    
}

//Deleting a file with "-del" command
let delisPresent = optionsArr.includes("-del");
if (delisPresent) 
{
    fs.unlinkSync(filesArr[0]);
}

//Checking if file exists or not
for (let i = 0; i < filesArr.length; i++) 
{
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist)
    {
        console.log(filesArr[i] + " File does not exists.");
        return;
                            ///////OR////////
        //process.exit(); //Another way of ending a program
    }
}

let content = "";
for (let i = 0; i < filesArr.length; i++) 
{
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\r\n";
}

let contentArr = content.split("\r\n");

//'-s' for removing extra lines 
let isPresent = optionsArr.includes("-s"); //"includes" it checks '-s' is available or not in array
if (isPresent) //Is '-s' is available then this condition will work
{
    for (let i = 1; i < contentArr.length; i++) 
    {
        if (contentArr[i] == "" && contentArr[i - 1] == "") 
        {
            contentArr[i] = null; //Null helps in removing the line
        }

        else if (contentArr[i] == "" && contentArr[i - 1] == null) 
        {
            contentArr[i] = null;
        }
    }
}

let tempArr = [];
for (let i = 0; i < contentArr.length; i++) 
{
    if (contentArr[i] != null) 
    {
        tempArr.push(contentArr[i]);
    }
}

contentArr = tempArr;

//"Split" in string
// var str = "Hello my name is dakshay.";
// console.log(str);
// var a = str.split(" "); //Split helps in dividing the string on the basis of argument and puts them in an array.
// console.log(a);


let indexOfN = optionsArr.indexOf("-n"); //Gives the index of "-n" from optionsArr
let indexOfB = optionsArr.indexOf("-b"); //Gives the index of "-b" from optionsArr

let finalOption = "";

if (indexOfN != -1 && indexOfB != -1) //If both "-n" & "-b" are present at the same time
{
    if (indexOfN < indexOfB) //If the index of "-n" is lower than "-b" then "-n" will work
    {
        finalOption = "-n"
    }
    else
    {
        finalOption = "-b"; //If the index of "-b" is lower than "-n" then "-b" will work
    }
}

else
{
    if (indexOfN != -1) //If only "-n" present
    {
        finalOption = "-n";
    }
    else if (indexOfB != -1) //If only "-b" present
    {
        finalOption = "-b";
    }
}


if (finalOption == "-n")
{
    modifyContentByN(); //For "-n" calling the function for the final output
}

else if(finalOption == "-b")
{
    modifyContentByB(); //For "-b" calling the function for the final output
}


function modifyContentByN() //Creating function for "-n"
{
    for (let i = 0; i < contentArr.length; i++) 
    {
        contentArr[i] = (i + 1) + ") " + contentArr[i];
    }
}

function modifyContentByB() //Creating function for "-b"
{
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) 
    {
        if (contentArr[i] != "") 
        {
            contentArr[i] = (count) + ") " + contentArr[i]   
            count++;
        }
    }
}

console.table(contentArr);