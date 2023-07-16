const dotenv = require('dotenv'); //to connect config.env to project
dotenv.config({ path: './config.env'})

const app = require('./app');  //importing app as this server file is the first file that will receive requests


//console.log(app.get('env')) //this is to check the environment we are currently in.
//console.log(process.env) 

//START SERVER
const port = process.env.PORT || 3000; //we only call is once and it is available in every file in the project
app.listen(port, ()=>{    //start the server with listen()
    console.log(`app running on ${port}...`);
});