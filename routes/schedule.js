const express=require('express')
const{Schedule}=require('../models')

const router=express.Router()

router.get('/',async(req,res)=>{
    try{
        const Schedules=await Schedule.findAll()
        return res.status(200).json(Schedules)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error reading all schedules'})
    }
})
router.post('/',async(req,res)=>{
    try{
        const {title,place,startTime,endTime,description}=req.body
        const newSchedule=await Schedule.create({...req.body})
        return res.status(201).json(newSchedule)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error creating schedule'})
    }
})

router.put('/:id',async(req,res)=>{
    const scheduleId=req.params.id
    try{
        const schedule=await Schedule.findByPk(scheduleId)
        if(!schedule) return res.status(404).json({error:'schedule not found'})
        await schedule.update(req.body)
        return res.status(200).json(schedule)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error updating schedule'})
    }
})

router.delete('/:id',async(req,res)=>{
    const scheduleId=req.params.id
    try{
        const schedule=await Schedule.findByPk(scheduleId)
        if(!schedule) return res.status(404).json({error:'schedule not found'})
        await schedule.destroy()
        return res.status(204).json()
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error updating schedule'})
    }
})

module.exports=router