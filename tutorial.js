//Express is a popular node.js framework. we need to install postman which allows us to test APIs

//API - Application Programming Interface - a piece of software  that can be used by another piece of software, in order to allow applications to talk to each other.

// Database -> json data -> api -> client

// RESTful API - representational states transfer is an  architecture that helps build api. Need to follow several principals:
//- separate API into logical resources (modules)
//- expose structured, resource-based URLs (http://www.natours.com/getTours/7  the whole thing is a url, but /getTours is a endpoint, /7 is a tour id or can be a name)
//- use HTTP methods(verbs), not url ( GET - performs the read operation on data. is used to get data from the server. Client sends a request with GET data and server sends the response. POST- if a client wants to create a new tour from the database, POST is used to send new data to the server. PUT and PATCH are like POSTs but for updates or changes on the client side. PUT - the client send the entire updated object, where PATCH only sends changed data to server. DELETE - delete data). CRUD - create, read, update, delete.
//- send data as json(usually) { "key": "value"} can contain arrays, objects, strings, numbers
//- must be stateless - Stateless RESTful API - all state is handled on the client. This means that each request must contain all the information necessary to process a certain request. The server should not have to remember previous requests.

//Middleware is a function between request and response. There can be many processes in the middleware which is called middleware stack. The order of processes is defined in the code. so the order of the code matters a lot. When we call  next() in the middleware that means another middleware function will start until we reach the last one. the last one is a rout handler and will call res.send(...) and send the response back to the client.  Middleware has excess to (req, res, next). Its important to call next() in order to proceed to the next function.

//Mounting - a process of grouping similar routes. In order to do that we need to create a separate router for each of the resources.

//in package.json under start add "nodemon servermain.js" (nodemon and file name for server)and we will use to run the server in terminal
//we use what is under start in package.json (nodemon servermain.js) to run the server.

//Param middleware is middleware that only runs for certain parameters. in this example the only parameter we have is id. so we can write the middleware that will run only when the id is present in url. First we specify the parameter, then in the middleware function there are 4 parameters(req, res, next, val) - value is the value of the parameter in question. its a local application and will only be applied to the parameter in this module.

//static files are files that we have but are not accessible with router. if we want to use them we need to use express middleware

//Node or express can run in development environment or production environment. Different databases or login on or off will be based on environment variables. everything that is not related to express will be moved to the outside app.js file. 
//console.log(app.get('env')) //this is to check the environment we are currently in.
//To set up configurations for environment variables create a file config.env and inside it put:
//NODE_ENV=development.  to be able to connect this file to your project install in terminal npm i dotenv  and then go to the server file and require that module.And then type npm start in terminal to write all the data from the config.

//When the website is ready for deployment then you should change the environment to production.