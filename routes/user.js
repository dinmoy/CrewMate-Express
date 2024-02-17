const express=require('express')
const bcrypt=require('bcrypt')
const {User}=require('../models')

const router=express.Router()

router.get('/',async(req,res)=>{
    try{
        const users=await User.findAll()
        return res.status(200).json(users)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: 'Error reading all users'})
    }
})
router.post('/signup',async(req,res)=>{
    try{
        const {name,email,password}=req.body
        console.log(req.body)
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

        const user=await User.findOne({where: {email,password}})

        if(user){
            const passwordMatch=await bcrypt.compare(password,user.password)
            return res.status(200).json(user);
            if(passwordMatch){
                req.session.user=user
                return res.status(200).json(user);
            }
        }
        return res.status(400).json({error: 'Invalid credentials'})
    }catch(err){
        console.log(err)
        return res.status(500).json({error : 'Error login'})
    }
})
module.exports=router