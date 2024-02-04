const express=require('express')
const{Schedule}=require('../models')

const router=express.Router()

router.post('/',async(req,res)=>{
    try{
        const {club_id,name,place,startTime,endTime,memo}=req.body
        const newSchedule=await Schedule.create({...req.body})
        return res.status(201).json(newSchedule)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error creating schedule'})
    }
})

module.exports=router