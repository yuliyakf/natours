
const express = require('express');
const tourController = require('./../controllers/tourController')
const router = express.Router();

//param middleware only applies to tour id parameters in tourController module .
router.param('id', tourController.checkID);

//its a convention to call it just router instead of tourRouter or anything else.
//since all of the functions(route handlers) are imported from tourController we need to put tourController with each route. Or another options would be to destructure them at the top 
//const {getAllTours, createTour, getTour, updateTour, deleteTour }= require('./../controllers/tourController'). in this case we would not put tourController with each route below.
router  //we are calling new variable for router
    .route('/')  //original was '/api/v1/tours', changed to root ('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.createTour); //checkBody is a name of middleware function. here we are chaining middleware and a handler(function) for the same route

router   //we are calling new variable for router
    .route('/:id') //original was '/api/v1/tours/:id', now ('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;  //exporting 