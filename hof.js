// function sayHello(name ,callback){
//     console.log(name);
//     callback();
// }
// function sayGoodbye(){
//     console.log("goodbye")
// }
// // sayHello("dipesh",sayGoodbye)
// let fruits = ["apple","mango","banana"]


// ====<      MAp in js   >=================

// const numbers2 = [1,2,3,4];
// const result = numbers2.map((number)=>{
//     return{
//         number : number,
//         name: "Á"
//     }
// })

// console.log(result)


// const numbers3 = [ 1,2,3,4,5,6,7,8,9,10,11,12];
//  const res = numbers3.filter( function(num1){
//     return num1 % 2 == 0;
    
// })
// console.log(res)

// const books = [
//     {
//         title : "dipeshSubedi",
//         name : "dipeshSubedi",
//         roll : 11,
//     },
//     {
//         title : "dipeshDon",
//         name : "dipeshDon",
//         roll : 13,
//     },
//     {
//         title : "dipace",
//         name : "dipace",
//         roll : 12,
//     },
//     {
//         title : "dipeshSubedi",
//         name : "dipeshSubedi",
//         roll : 14,
//     }
// ]

// const output = books.filter(function(book){
//     return book.roll > 11
    
// })
// console.log(output)


const files = [ "files.js", "app.js","app.cpp"];
 const output = files.map(function(file){
    return file.endsWith('.js')
  })
  console.log(output)