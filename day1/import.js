// let data=require('./script1.js');

// console.log(data);
// console.log(data.first);
// console.log(data.second(1,2));  

//destructureing:
let {second} =require('./export.js');

console.log(second(10,10));