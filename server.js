require('./models/db');
require('dotenv').config();

var express = require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');

var app = express();
app.use(cors({
    origin:'https://klaviyo-demo.herokuapp.com/'
}));

//Import All Middlewares Here
const auth = require('./middlewares/auth.js');
const Middlewares = [auth];

//Import all Route Files here
const flows=require('./routes/flows');
const users=require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = process.env.PORT || 8081;

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}

app.listen(PORT,()=>{
    console.log('server started at port: ',PORT);
});

//routes
app.use('/flows', Middlewares , flows);
app.use('/users', users);