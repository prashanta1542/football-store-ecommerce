const express=require('express');
const bycrypt=require('bcryptjs');
const User=require('../models/User');
const router=express.Router();

router.post('/users',async(req,res)=>{
    const{username,email,password,photo}=req.body;

    try{

        //find the exiting user
        const existingUser = await User.findOne({
            where:{email}
        });
        if(existingUser){
            return res.status(400).json({
                message:'User already exist'
            });
        }
    
        //if not register before then create new one with
        //hased your password
        const hashedPassword = await bycrypt.hash(password,10);
        const newUser=await User.create({
            username,
            email,
            password:hashedPassword,
            photo,
        });
    
        //send ressponse for current executions
        res.status(201).json({
            message:"User create successfully",
            user:newUser
        })
    
    }catch(err){
      console.error('Error creating user:',err);
      res.status(500).json({message:"Server error"});
    }
});

router.put('/users/:id',async(req,res)=>{
    const{id}=req.params;
    const{username,email,password,photo}=req.body;

    try{
        //find an user
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({
                message:'User not found',
            })
        }
        
        let hashedPassword;
        if(password){
            hashedPassword=await bycrypt.hash(password,10);
        }

        //update user data
        await user.update({
            username: username || user.username,
            email: email || user.email,
            password:hashedPassword || user.password,
            photo:photo||user.photo
        });

       //send an reponse for update
       res.json({
        message :"User data update successfully",user
      })
    }catch(err){
      console.error('Error updating user: ',err);
      res.status(500).json({message:'Server error'});
    }
});

module.exports=router;
