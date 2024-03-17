const express=require("express")
const morgan = require('morgan');

toursController = require("./controllers/toursController");
toursRoute = require("./routes/toursRoutes");

const app = express()

app.use(express.json());  //middleware for finding body key in req
app.use(morgan('dev')); //middleware for logging requests to the server
app.use((req, res, next)=>{
    res.append('Server-Time', new Date().toISOString());
    res.append('Secret-Key-From-My-Server', '123_abc');
    next();
}) //own middleware

app.use('/api/v1/tours',toursRoute); 

app.listen(1400,()=>{
    console.log("******App listening at 1400*******")
})