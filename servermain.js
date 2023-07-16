const app = require('./app');  //importing app as this server file is the first file that will receive requests
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'})

console.log(app.get('env')) //this is to check the environment we are currently in.

//START SERVER
const port = 3000;
app.listen(port, ()=>{    //start the server with listen()
    console.log(`app running on ${port}...`);
});