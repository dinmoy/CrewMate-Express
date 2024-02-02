const { application } = require('express')
const express=require('express')
const {Apply}=require('../models')

const router=express.Router()

router.post('/',async(req,res)=>{
    try{
        const {club_id,question1,question2,question3}=req.body
        const newForm=await Apply.create({...req.body})
        return res.status(201).json(newForm)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error creating applyform'})
    }
})
module.exports=router