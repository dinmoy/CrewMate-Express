const express=require('express')
const {Activity}=require('../models')

const router=express.Router()

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

module.exports=router