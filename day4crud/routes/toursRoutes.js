const express=require("express")

const toursController = require('../controllers/toursController');
const checkID=require('../controllers/toursController')

const toursRoute = express.Router();

toursRoute.route('/')
          .get(toursController.getAllTours)
          .post(toursController.createTour)

toursRoute.param('id', checkID) //middleware route

toursRoute.route('/:id')
          .get(toursController.getTour)
          .patch(toursController.updateTour)
          .put(toursController.replaceTour)
          .delete(toursController.deleteTour)

module.exports = toursRoute;