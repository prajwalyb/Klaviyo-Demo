require('./models/db');

var express = require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');

var app = express();
app.use(cors());

const flows=require('./routes/flows');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log('server started at port: ',PORT);
});

//routes
app.use('/flows', flows);