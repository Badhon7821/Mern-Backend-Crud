const express = require('express');
const route = express.Router();
const crudModel = require('./models/Crud');


route.get('/show',async (req,res)=>{
    const data = await crudModel.find();
    res.send(data);
});

route.post('/save',async (req,res)=>{

    const cr = new crudModel({
        title:  req.body.title, 
        author: req.body.author,
        body:   req.body.body
    });

    try{
        const al = await cr.save();
        res.json(al);
    }catch(err){
        res.send("Error")
    }  
});


route.delete('/delete/:id',async (req,res)=>{
    console.log(req.params.id);
    let data = await crudModel.deleteOne({_id:req.params.id});
    res.send({msg : "deleted",data:data});
});

route.post('/update/:id',async (req,res)=>{
    console.log(req.params.id,req.body);

    try{
        let up = await crudModel.findByIdAndUpdate({_id:req.params.id},{
        title:  req.body.title, 
        author: req.body.author,
        body:   req.body.body
        })
        res.send({msg : "Updated",up:up});
    }catch(err){
        console.log("Error Occured")
    }
    
});





module.exports = route;