// // function add(a , b)
// // {
// //     return a+b;
// // }

// function Calculator(str, a, b)
// {
//     if(str == 'add')
//     {
//         return function add(){
//             console.log(a + b);
//         }
//     }
// }

// let returned = Calculator('add', 5, 6)
// // console.log("answer is\n" + returned);
// returned();

//Array
// let cars = ['BMW', 'AUDI', 'MG', 1, 2, 3, true];
// console.log(cars);

// //Pop Method--Removes last element from an array
// cars.pop();
// console.log(cars);

// //Push Method--Add an element at the last position in an array
// cars.push('TATA');
// console.log(cars);

// //Unshift Method--Add an element at the starting in an array
// cars.unshift('Mustang');
// console.log(cars);

// //Shift Mehthod--Removes an element from the 0th index of an array
// cars.shift();
// console.log(cars);

//2D Array
// let array2d = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(array2d);

// //2D Array printing in the form of table
// console.table(array2d);

// //Printing paticular element in 2D Array
// console.log(array2d[1][2]);

// console.log(abc);
// greet();
// var abc = 10;
// function greet(){
//     console.log("Hello");
// }
// console.log(abc);

// function outer(){
//     inner();
//     function inner(){
//         console.log(b);
//     }
// }
// var b = 10;
// outer();
// console.log(b);

let ob1 = {
    
}

var ob2 = {
    add:function add(a,b){
        return a + b;
    }
}
// console.log(ob1);
// console.log(ob2);

// ob1 = ob2;
// console.log(ob1);

module.exports = ob2;