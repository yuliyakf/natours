const express = require('express');
const userController = require('./../controllers/userController');
const { getAllUsers, createUser, getUser, updateUser, deleteUser } = require('./../controllers/userController'); //since all functions(route handlers) are coming from userController file we need to destructure it here or add userController. before each route below.

const router = express.Router();  //creating a new Router and saving it to variable

router  //we are calling new variable for router
    .route('/')  //original was '/api/v1/users', now root('/')
    .get(getAllUsers)
    .post(createUser);

router   //we are calling new variable for router
    .route('/:id') //original was '/api/v1/users/:id', now ('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);


module.exports = router; 