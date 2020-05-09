const express = require('express');
const router = express.Router();

const Flow = require('../models/flows')

router.post('/',(req,res)=>{
    //console.log("req "+ JSON.stringify(req.body.flow))
    const newFlow= new Flow({
        flow: req.body.flow
    })
    newFlow
        .save()
        .then(item=>res.json("Flow Added"))
        .catch(err=>{console.log(err)});
})

module.exports= router;