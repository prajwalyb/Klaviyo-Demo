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

router.get('/loadAll/:user_id', async (req,res)=>{
    let flows= await Flow.find({ "user._id":req.params.user_id})
    if(flows)
        return res.status(200).json(flows);
    return null
})

router.get('/:user_id/loadOne/:flow_id', (req,res)=>{
    Flow.findOne({"user._id":req.params.user_id,"flow.flow_id":req.params.flow_id})
        .then(flow=>{
            return res.status(200).json(flow)
        })
        .catch(err=>{
            return res.status(404).json({msg:"Not Found"})
        })
})

router.delete('/:user_id/deleteOne/:flow_id', (req,res)=>{
    Flow.find({"user._id":req.params.user_id , "flow.flow_id":req.params.flow_id}).deleteOne()
        .then(status=>{          
            if(status.deletedCount==1)
                return res.status(200).json({success:true})
            return res.status(404).json({success:false})
        })
        .catch(err=>res.status(404).json({success:false}));
})

module.exports= router;