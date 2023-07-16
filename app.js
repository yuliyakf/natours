//local host to test server  127.0.0.1:3000

//we use what is under start in package.json (nodemon servermain.js) to run the server.


//We start receiving the request in this main file. and depending on the rout it will go to the route and execute one of the controllers. and then the response gets send 
//this main file is usually used for middleware declarations that we want to apply to all the routes.

const express = require('express');
const morgan = require('morgan'); //3rd party middleware

const tourRouter = require('./routes/tourRoutes') //importing from file
const userRouter = require('./routes/userRoutes') //importing from file

const app =  express(); //it will add manmy methods to this variable

//MIDDLEWARES - these will be applied to all of the routes

if(process.env.NODE_ENV === 'development'){ //only use morgan if in  development env
    app.use(morgan('dev'));  //calling 3rd party middleware 'morgan'
}

app.use(express.json()); //express.json is middleware ( which is a function that can modify the incoming request data. Middleware is a process between the request and response)

app.use(express.static(`${__dirname}/starter/public`)) //since its a static file you don't need to type public in the url but just directly the file inside public folder, which is now a root. url will look like this; 127.0.0.1:3000/overview.html

app.use((req, res, next)=>{  //this is middleware. 
    console.log('hello from the middleware');
    next(); //you have to call next() to proceed to the next function
});
 
app.use((req, res, next)=>{   //this is another middleware
    req.requestTime = new Date().toISOString(); //will write date
    next();
})

//ROUTES
//these two routers are actually middleware
app.use('/api/v1/tours', tourRouter); //this is now the root url for tours. For this route we want to apply tourRouter middleware
app.use('/api/v1/users', userRouter); //this is now the root url for users. For this route we want to apply userRouter middleware

module.exports = app;  //exporting it to server file

