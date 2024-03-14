//create file-->

// const fs = require('fs');
// console.log('START')
// fs.writeFileSync('newFile.txt', 'Hello Aryan!!');
// console.log('END')


//read File-->(blocking)-->

// const fs = require('fs');

// console.log('********START************')
// let res = fs.readFileSync('./newFile.txt');
// console.log(res);
// console.log(res.toString());
// console.log('********END************')


//read file (non blocking)-->

// const fs = require('fs');

// console.log('********START************')
// fs.readFile('./newFile.txt',(err,res)=>{
//     console.log(res);
//     console.log(res.toString())
// });

// console.log('********END************')



//using promise fs-->

const fsPromises = require('fs/promises');

console.log('********START************')
fsPromises.readFile('./newFile.txt', {encoding:'utf-8'}).then(console.log);
console.log('********END************'); 

// encoding:'utf-8' using instead of wring gain and again toString();