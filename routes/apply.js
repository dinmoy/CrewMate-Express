const { application } = require('express')
const express=require('express')
const {Apply}=require('../models')

const router=express.Router()

//지원폼 생성
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

router.put('/:id',async(req,res)=>{
    const formId=req.params.id
    try{
        const form=await Apply.findByPk(formId)
        if(!form) return res.status(404).json('applyForm not found')
        await form.update(req.body)
        return res.status(200).json(form)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error updating'})
    }
})
module.exports=router