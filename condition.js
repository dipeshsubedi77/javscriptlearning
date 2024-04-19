//condition statements
// var  age = 21;
// var name = "hello";
// if(age == 21 && name == "c"){
//     console.log("you can")
// }
// else{
//     console.log("you can't vote");
// }

// votes condition
// var age = 2;
// // console.log("enter your age:\n");

// if(age >= 18){
//     console.log("you can vote");
// }
// else if(age < 5){
//     console.log("you are too young\n");
//     console.log("you cant vote");
// }

// else{
// console.log("you are  not eligible");
// }



// console.log("hello aalu padu");
// console.log("hello aalu padu");
// return;
// console.log("hello aalu padu");
// var name = "dipesh";
// if(name!== "dipesh"){
//     console.log("right");

// }


// loops
// 1. for loop
// 2.while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop

// m
// const names = [ "sunday","monday","tuesday"];
// // 
// // names.push("friday");
// // pop ko ni same

// //unshift 
// names.unshift("january");
// console.log(names.length);// length le kati xa dekhauxa array size
// const numbers = [1,2,3,4,5];
// // using slice
// const newSliceArray = numbers.slice(1,4);
// console.log(newSliceArray)
// const numbers = [1,2,3,4,5];
// let splicedNumbers =numbers.splice(2,4,10,20);
// console.log(splicedNumbers);

// const person = {
//     name:"dipeshSubedi",
//     roll: 11,
// }
// Object.freeze(person);
// person.name = "hello";
// console.log(person.name)
  // ======================CONDITION===============
// 

// const tempreature =29;
// if(tempreature>30){
//     console.log("its hot");

// }
// else
// {
//     console.log("cold");
// // }




// split
// let text = "I love you babe"
// const newArray = text.split("");
// console.log(newArray);

// ternary operators
// const isRaining = false;

// // const result =  isRaining ? " carry umbrella" // condition?
// //  :"dont carry umbrella";
// // console.log(result);

// const result = isRaining && "carry umbrella" || "dont";
// console.log(result);

// shortCircuitEvaluation

let isLoggedIn = true;
const name = isLoggedIn && "Authentication"
console.log(name);