const express = require('express')
const { Member } = require('../models')
const { route } = require('./user')

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

//부원 업데이트
router.put('/:id',async(req,res)=>{
    const memberId=req.params.id
    try{
        const member=await Member.findByPk(memberId)
        if(!member) return res.statuts(404).json('Member not found')
        await member.update(req.body)
        return res.status(200).json(member)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error updating member'})
    }
})

//부원 삭제
router.delete('/:id',async(req,res)=>{
    const memberId=req.params.id
    try{
        const member=await Member.findByPk(memberId)
        if(!member) return res.status(404).json('Member not found')
        await member.destroy()
        return res.status(204).json()
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Erro deleting member'})
    }
})
module.exports=router