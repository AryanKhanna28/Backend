// const http = require('node:http');

// const app = http.createServer((req, res)=>{
//     console.log("request received");
//     res.end('<h1>Hello Aryan</h1>');
// }) 

// app.listen(2800);

//hame kuch bhi change krne ke baad baar baar exit aur reload krna padta hai toh uss hi chkkar me hame NODEMON use kana pada
// now again-->>

// const http = require('node:http');

// const app = http.createServer((req, res)=>{
//     console.log("request received");
//     res.end('<h1 style= "color:red;">Hello Aryan</h1>');
//     // console.log(req.headers)
//     console.log(req.url);
// }) 

// app.listen(2800,()=>{
//     console.log("server is running continuously")
// });


//now we want to save all the req in a file --->>

const http = require('node:http');
const fsPromises=require('fs/promises');

const app = http.createServer((req, res)=>{
    console.log("request received");
    const date = (new Date()).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    fsPromises.appendFile('./logs.txt', `Request are: ${date}: \nRoute is : ${req.url}\n\n`);
    res.end('<h1 style= "color:red;">Hello Aryan</h1>');
}) 

app.listen(2800,()=>{
    console.log("server is running continuously")
});



//we can do it async and await
    