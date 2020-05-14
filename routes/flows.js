const express = require('express');
const router = express.Router();

const Flow = require('../models/flows')

router.post('/save',(req,res)=>{
    //console.log("req "+ JSON.stringify(req.body))
    const newFlow= new Flow({
        user: req.body.user,
        flow: req.body.flow
    })
    newFlow
        .save()
        .then(item=>res.json("Flow Added"))
        .catch(err=>{console.log(err)});
})

module.exports= router;