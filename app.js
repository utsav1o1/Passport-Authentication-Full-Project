const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const app = express();

// database config 
const db = require('./config/keys').MongoURI;

// connect to Mongo 
mongoose.connect(db, {useNewUrlParser:true}).then(()=>console.log('Mongoose Connected..')).catch(err=>console.log(err))


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//BodyParser
app.use(express.urlencoded({ extended:false}));


//Routes
app.use('/',require('./routes/index'));

app.use('/users', require('./routes/users'));





const PORT = process.env.PORT||8000;

app.listen(PORT, console.log(`server started on port ${PORT} at localhost:${PORT}`));
