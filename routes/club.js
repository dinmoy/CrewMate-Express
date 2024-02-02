const express=require('express')
const {Club}=require('../models')

const router=express.Router()

router.get('/',async(req,res)=>{
    try{
        const clubs=await Club.findAll()
        return res.status(200).json(clubs)
    }catch(err){
        console.log(err)
        return res.status(500).json({error : 'Error read all clubs'})
    }  
})

router.post('/',async(req,res)=>{
    try{
        const {name,introduction,profile}=req.body
        const newClub=await Club.create({...req.body})
        return res.status(201).json(newClub)
    }catch(err){
        console.log(err)
        return res.status(500).json({error : 'Error creating club'})
    }
})

module.exports=router