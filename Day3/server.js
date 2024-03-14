const http = require('http');
const url = require('url');
const fs= require('fs');
const data = fs.readFileSync('./data.json');
let {products} = JSON.parse(data);
const Htmlpage=fs.readFileSync('./index.html');



const app=http.createServer((req,res)=>{
    console.log("request recieved");
    const route= req.url;
    const parsedUrl=url.parse(route,true)
    // console.log(parsedUrl);

    let card=function(element){
        let pageData=Htmlpage.toString()
        let box=pageData.replace('productTitle',element.title);
        box=box.replace('imagesrc',element.thumbnail);
        box=box.replace('Description',element.description);
        box=box.replace('iD',`?id=${element.id}`);
        return box;
    }

    switch (parsedUrl.pathname){
        case '/': {
            res.end("<h1>Hello Everyone</h1>");
            break;
        }
        case '/product' : {
            // console.log(JSON.parse(data))

            if('id' in parsedUrl.query){
                number = parsedUrl.query.id; // query : id -> number
                // products -> array -> id : element -> JSON
                // string -> JSON return 
               
                res.end( JSON.stringify(products[number]));
                break;

            }
            else{
                const sendingData=products.map((ele)=>{
                    console.log(card(ele))
                    return card(ele);
                })
                const strData=sendingData.toString();
                // const strjoindata=strData.join('');
                res.end(strData)
            }
            
            break;
        }
        default:{
            res.writeHead(404,{
                'Content-Type': 'text/html'
            });
            res.end("<h1>Error</h1>");
            break;
        }
    }
});

app.listen(2800,()=>{
    console.log("server is running on port 2800");
});