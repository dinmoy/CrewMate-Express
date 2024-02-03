const express=require('express')
const {History}=require('../models')

const router=express.Router()

router.get('/',async(req,res)=>{
    try{
        const history=await History.findAll()
        return res.status(200).json(history)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error reading all histories'})
    }
})

router.post('/',async(req,res)=>{
    try{
        const {clud_id,name,date,thumbnail}=req.body
        const newHistory=await History.create({...req.body})
        return res.status(201).json(newHistory)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error creating history'})
    }
})
module.exports=router