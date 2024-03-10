const { application } = require('express')
const express=require('express')
const {Apply}=require('../models')

const router=express.Router()

//지원폼 생성
router.post('/',async(req,res)=>{
    try{
        const {name,student_num,phone_num,answer1,answer2,answer3}=req.body
        const newForm=await Apply.create({...req.body})
        return res.status(201).json(newForm)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error creating applyform'})
    }
})

//지원폼 수정
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

//지원폼 삭제
router.delete('/:id',async(req,res)=>{
    const formId=req.params.id
    try{
        const form=await Apply.findByPk(formId)
        if(!form) return res.status(404).json('apply-form not found')
        await form.destroy()
        return res.status(204).json()
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error deleting apply-form'})
    }
})
module.exports=router