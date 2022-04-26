let input = process.argv; //This will also print the location of file, in order to remove that we will use slice function
console.log(input);

let fininput = process.argv.slice(2); //Removing first 2 lines
console.log(fininput);