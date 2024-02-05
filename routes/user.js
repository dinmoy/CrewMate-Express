const express=require('express')
const bcrypt=require('bcrypt')
const {User}=require('../models')

const router=express.Router()

router.post('/signup',async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await User.create({
            ...req.body,
            password:hashedPassword
        })
        req.session.user=newUser
        console.log(req.session.user)

        return res.status(201).json(newUser)
    }catch(err){
        console.log(err)
        return res.status(500).json({ error : 'Error creating user'})
    }
});

router.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body

        const user=await User.findOne({where: {email}})

        if(user){
            const passwordMatch=await bcrypt.compare(password,user.password)

            if(passwordMatch){
                req.session.user=user
                return res.status(200).json(user);
            }
        }
        return res.status(401).json({error: 'Invalid credentials'})
    }catch(err){
        console.log(err)
        return res.status(500).json({error : 'Error login'})
    }
})
module.exports=router