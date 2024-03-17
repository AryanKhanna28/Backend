const fs = require('fs');
const fsPromises = require('fs/promises');

let data=JSON.parse(fs.readFileSync("./data/data.json",{encoding:"utf8"}));

module.exports.checkID = (req, res, next, val) => {
  
  let objToFind = data.find((obj)=> obj.id==val);
  
  if(objToFind==undefined){
      res.status(400);
      return res.json({
      status:"fail",
      body:{
          message:"Resource not present"
      }
    })
  }

  next();
}

module.exports.getAllTours = (req, res) =>{
    res.status(200);
    res.json({
      status: 'success',
      body:{
        tours:data
      }
    })
  };

module.exports.getTour = (req,res) => {
  const { id: paramId } = req.params;
  
    try{
      let objToFind = data.find(({id})=> id==paramId)
     
          res.status(200);
          res.json({
          status:"success",
          body:{
            tour:objToFind
          }
      });
  
      
      
    }
    catch(error){
      console.error("Error Occured:",error.message);
      res.status(500);
      res.json({ error: 'Internal server error' });
    }
  }

  module.exports.createTour= (req, res) =>{
    // as in post the req has a body also so use that
    let  newTour=req.body;
    let {id:reqId,...rest}=newTour;
  
    if(rest.name && rest.price && rest.duration){
      const newId = data[data.length-1].id + 1;
      const newObj={id:newId,...rest};
    
      fsPromises.writeFile("./data/data.json",JSON.stringify([...data,newObj]));
    
      res.status(201);
      res.send({
        status: 'success',
        body:{
          tours:newObj
        }
      })
    }
    else{
        res.status(400);
        res.send({
        status: 'fail',
        message: 'Required params: name, price, duration'
        })
    }
}

module.exports.updateTour = (req,res) => {
    const newTour=req.body;
    const { id: paramId } = req.params;
  
    try{
      let objToFind = data.find(({id})=> id==paramId)
      
      //change the object accordingly
      const newobj={...objToFind,...newTour};
  
      const newData=data.map((item)=>{
        if(item.id==paramId){
          return newobj;
        }
        else {
          return item;
        }
      })
  
      fsPromises.writeFile("./data/data.json",JSON.stringify(newData));
  
      res.status(200);
      res.json({
        status:"Resource updated successfully",
        body:{
          tour:newobj
        }
      });   
    }
    catch(error){
      console.error("Error Occured:",error.message);
      res.status(500);
      res.json({ error: 'Internal server error' });
    }
  }

module.exports.replaceTour = (req,res) => {
    const newTour=req.body;
    let {id:reqId, ...rest}= newTour;
    const { id: paramId } = req.params;
  
    if(rest.name && rest.price && rest.duration){
      try{
        //not to replace the object accordingly as the data is updated
      
        const newData=data.map((item)=>{
          if(item.id==paramId){
            return {id:paramId,...rest};
          }
          else {
            return item;
          }
        })
        console.log(newData);
    
        fsPromises.writeFile("./data/data.json",JSON.stringify(newData));
    
        res.status(200);
        res.json({
          status:"Resource replaced successfully",
          body:{
            tour:{id:paramId,...rest}
    
          }
        });
        
      }
      catch(error){
        console.error("Error Occured:",error.message);
        res.status(500);
        res.json({ error: 'Internal server error' });
      }
    }
    else{
      res.status(400);
      res.send({
        status: 'fail',
        message: 'Required params: name, price, duration'
        })
    }
  }

module.exports.deleteTour = function (req,res){
 
    const { id: paramId } = req.params;
  
    try{
  
      //delete the object accordingly
    
      let indexToRemove = data.findIndex(item => item.id == paramId);
  
      data.splice(indexToRemove, 1);
      
      fsPromises.writeFile("./data/data.json",JSON.stringify(data));
  
      res.status(204);
      res.json({
        status:"Resurce deleted successfully",
        body:{
          tour:{}
        }
      });
      
    }
    catch(error){
      console.error("Error Occured:",error.message);
      res.status(500);
      res.json({ error: 'Internal server error' });
    }
  }