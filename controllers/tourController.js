const fs = require('fs');

//before we create a router we need to read data of all the tours. This will be as synchronous function in a top level code and will only run once but will assign all data to a variable that we will be able to use. And we are converting it right away to an array of javascript object with JSON.parse.
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`))

//param middleware 
exports.checkID = (req, res, next, val)=>{
    console.log(`Tour id is ${val}`);
    if (req.params.id *1 > tours.length){ 
        return res.status(404).json({
            status: 'fail', 
            message: 'Invalid ID'
        });
    }
    next();
};

//middleware to check body for name and price
exports.checkBody=(req, res, next)=>{
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next();
}

//since we need to export all these functions, we will put them all in the exports object
//here we create functions and asign them to variables to be called later.
exports.getAllTours = (req, res)=>{ 
    console.log(req.requestTime);  
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,  //requesting date from middleware to show in body
        results: tours.length,
        data: {
            tours 
        }
    });
};

exports.getTour = (req, res)=>{ 
    const id = req.params.id * 1; //changing id from a string to a nubmer by *1
    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
};

exports.createTour = (req, res)=>{
    const newId  = tours[tours.length - 1].id + 1; 
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/starter/dev-data/data/tours-simple.json`, JSON.stringify(tours), err =>{
        res.status(201).json({  //201 means created
            status: 'success', 
            data: {
                tour: newTour
            }
        });
    });
};

exports.updateTour = (req, res) =>{
    res.status(200).json({
        status: 'success', 
        data: {
            tour 
        }
    });
};

exports.deleteTour = (req, res) =>{
    res.status(204).json({   //204 means no data to pass
        status: 'success', 
        data: null  
    });
};


//this is a repeated code in getTour, updateTour and deleteTour functions, so we can create a param middleware for it to check the id and if its not valid return the error message. Return statement is important here,because this is an error and it needs to stop if id is not valid. if we don't have return then it will give us an error message but will still proceed to the next(). next() should only run if the id is valid.
//if (req.params.id *1 > tours.length){ 
    // return res.status(404).json({
    //     status: 'fail', 
    //     message: 'Invalid ID'
    // });


    
