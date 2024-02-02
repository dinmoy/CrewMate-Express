const express = require('express')
const { Member } = require('../models')

const router = express.Router()

//모든 부원 조회
router.get('/',async(req,res)=>{
    try{
        const members=await Member.findAll()
        return res.status(201).json(members)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error reading all members'})
    }
})

//부원 생성
router.post('/',async(req,res)=>{
    try{
        const {club_id,name,role,introduction,profile}=req.body
        const newMember=await Member.create({...req.body})
        return res.status(201).json(newMember)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error creating members'})
    }
})

module.exports=router