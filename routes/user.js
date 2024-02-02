const express=require('express')
const {User}=require('../models')

const router=express.Router()

router.get('/signup',async(req,res)=>{
    try{
        const {name,email,password,created_date}=req.body
        const newUser=await User.create({
            ...req,body
        })
        return res.status(201).json(newUser)
    }catch(err){
        console.log(err)
        return res.status(500).json({ error : 'Error creating user'})
    }
});

module.exports=router