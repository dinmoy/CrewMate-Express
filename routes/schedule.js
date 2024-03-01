const express=require('express')
const{Schedule}=require('../models')

const router=express.Router()

//모든 일정 조회
router.get('/',async(req,res)=>{
    try{
        const Schedules=await Schedule.findAll()
        return res.status(200).json(Schedules)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error reading all schedules'})
    }
})
//일정 추가
router.post('/',async(req,res)=>{
    try{
        const {title,place,start,end,description}=req.body
        const newSchedule=await Schedule.create({...req.body})
        return res.status(201).json(newSchedule)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error creating schedule'})
    }
})
//일정 수정
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
//일정 삭제
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