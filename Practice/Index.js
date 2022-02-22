var a;

a = "Hello";
console.log(typeof a);
console.log(a);

var num;
num = 5000;
console.log(`Half of ${num} is ${num/2}`);

let name;
name = 5;
console.log(name);

let n = 10

//if we declare var in for loop it also works outside the loop
for(var i = 0; i <= n; i++)
{
    console.log(i);
}
console.log(i);


//Adding new line
console.log(`Hello world \nHello world`);

//Function
function add(a , b)
{
    return a+b;
}

function sub(a , b)
{
    return a-b;
}

let ans = add(2,6);
console.log(ans);

//Function Calculator
function Calculator(str, a, b)
{
    if(str == 'add')
    {
        return function add(a,b){
            
        }
    }
    if(str == 'sub')
    {
        return sub(a,b);
    }
}

let returned = Calculator('add', 5, 6)
console.log(returned);

//Function properties
let sayHi = function abcd(){
    console.log("Hello Guyz");
}

sayHi();//This will print "Hello Guyz"
// abcd();//This line will gave an error.We cannot directly call a function here.
console.log("" + sayHi);//This will print the whole function

//Function(Immediate invoke function)
let additionIIFE = (function add(a,b){
    return a+b;
})(30,50);//Instead of passing arguments while calling we can add here.This is called immediate invoke.

console.log("answer is " + additionIIFE);
