const Tour = require('../models./tourModel');  

module.exports.getAllTours = async (req, res) =>{
    
    try{
      const tours = await Tour.find();
      res.status(200);
      res.json({
      status: 'success',
      body:{
        tours:tours
        }
      })
    }
    catch(error){
      res.status(500);
      res.json({
        status: 'fail',
        message:err.message,
      });
    }
  };

module.exports.getTour = async (req,res) => {
  const { id: paramId } = req.params;
    try{
        const tour =await Tour.findOne({
          "_id":paramId
        })
        
        if(!tour){
          throw new Error ("Invalid Tour ID");
        }
        res.status(200);
        res.json({
          status:"success",
          body: tour
        });
      }
    catch(error){
        res.status(404);
        res.json({
          status:"fail",
          body:{
            message:error.message
          }
      }) 
    }
  }

  module.exports.createTour= async (req, res) => {
      try{
          const newTour = await Tour.create(req.body);
          res.status(201);
          res.send({
          status: 'success',
          body:{
            tours:newTour
          }
        });
      }
      catch{
          res.status(422);
          res.send({
              status: 'fail',
              message:err.message,
          });
      }

}

module.exports.updateTour = async (req,res) => {
    const { id: paramId } = req.params;
    const {_id, __v, createdAt,...body} = req.body;
    try{
        const tour =await Tour.findOneAndUpdate(
          {
          "_id":paramId
          },
          {...body,
            updatedAt: new Date()
          },
          {
            new:true
          }
        )
        
        if(!tour){
          throw new Error ("Invalid Tour ID");
        }
        res.status(201);
        res.json({
          status:"success",
          body: tour
        });
      }
    catch(error){
        res.status(404);
        res.json({
          status:"fail",
          body:{
            message:error.message
          }
      }) 
    }
  }

module.exports.replaceTour = async (req,res) => {
    const { id: paramId } = req.params;
    const {_id, __v,createAt, ...body} = req.body;
    try{
        const tour =await Tour.findOneAndReplace(
          {
            "_id":paramId
          },
          {...body,
            updatedAt: new Date()
          },
          {
            new:true
          }
        )
        
        if(!tour){
          throw new Error ("Invalid Tour ID");
        }
        res.status(201);
        res.json({
          status:"success",
          body: tour
        });
      }
    catch(error){
        res.status(404);
        res.json({
          status:"fail",
          body:{
            message:error.message
          }
      }) 
    }
  }

module.exports.deleteTour = async function (req,res){
 
    const { id: paramId } = req.params;
    try{
        const tour =await Tour.findOneAndDelete({
          "_id":paramId
        })
        
        if(!tour){
          throw new Error ("Invalid Tour ID");
        }
        res.status(204);
        res.json({
          status:"success",
          body: null
        });
      }
    catch(error){
        res.status(400);
        res.json({
          status:"fail",
          body:{
            message:error.message
          }
      }) 
    }
  }