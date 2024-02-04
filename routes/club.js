const express=require('express')
const {Club,Member}=require('../models')

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

router.get('/:id/member',async(req,res)=>{
    const clubId=req.params.id
    try{
        const members=await Member.findAll({where: {club_id:clubId}})
        const data=members.map((el,index)=>{
            return {
                ...el.dataValues
            }
        })
        return res.status(200).json(data)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error reading one club member'})
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

router.put('/:id',async(req,res)=>{
    const clubId=req.params.id
    try{
        const club=await Club.findByPk(clubId)
        if(!club) return res.status(404).json({error:'club not found'})
        await club.update(req.body)
        return res.status(200).json(club)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error updating club'})
    }
})

router.delete('/:id',async(req,res)=>{
    const clubId=req.params.id
    try{
        const club=await Club.findByPk(clubId)
        if(!club) return res.status(404).json({error:'club not found'})
        await club.destroy()
        return res.status(204).json()
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'Error updating club'})
    }
})


module.exports=router