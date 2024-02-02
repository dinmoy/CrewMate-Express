const express=require('express')
const {Activity}=require('../models')

const router=express.Router()

//활동 생성
router.post('/',async(req,res)=>{
    try{
        const {club_id,name,introduction,thumbnail}=req.body
        const newActivity=await Activity.create({...req.body})
        return res.status(201).json(newActivity)
    }catch(err){
        console.log(err)
        return res.status(500).json({error : 'Error creatin activity'})
    }
})

// 활동 업데이트
router.put('/:id',async(req,res)=>{
    const activityId=req.params.id
    try{
       const activity=await Activity.findByPk(activityId)
       if(!activity) return res.status(404).json({error:'Activity not found'})
       await activity.update(req.body)
       return res.status(200).json(activity)
    }catch(err){
        return res.status(500).json({error: 'Error updating activity'})
    }
})

//활동 삭제
router.delete('/:id',async(req,res)=>{
    const activityId=req.params.id

    try{
        const activity=await Activity.findByPk(activityId)
        if(!activity) return res.status(404).json({error: 'Activity not found'})
        await activity.destroy()
        return res.status(204).json()
    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Error deleting activity'})
    }
})


module.exports=router