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
router.put('/:id',async(req,res)=>{
    const historyId=req.params.id
    try{
        const history=await History.findByPk(historyId)
        if(!history) return res.status(404).json('History not found')
        await history.update(req.body)
        return res.status(200).json(history)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error updating history'})
    }
})
router.delete('/:id',async(req,res)=>{
    const historyId=req.params.id
    try{
        const history=await History.findByPk(historyId)
        if(!history) return res.status(404).json('History not found')
        await history.destroy()
        return res.status(204).json()
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error deleting history'})
    }
})
module.exports=router