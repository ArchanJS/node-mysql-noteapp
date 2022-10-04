const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const db=require('../models');
const sendEmail=require('../utils/sendEmail');
const User=db.users;


exports.signUp=async(req,res)=>{
    try {
        let {username,email,password}=req.body;
        password=await bcryptjs.hash(password,10);
        const user=new User({username,email,password});
        await user.save();
        const token=await jwt.sign({id:user.id},process.env.SECRET,{expiresIn:'30min'})
        sendEmail({email:user.email,subject:"email verification",message:`Here is your token: ${token}`});
        res.status(201).json({message:"User created!"});

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

exports.verify=async(req,res)=>{
    try {
        const {token}=req.body;
        let obj=await jwt.verify(token,process.env.SECRET);
        await User.update({verified:true},{where:{id:obj.id}});
        res.status(200).json({message:"User verified!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

exports.signIn=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({where:{email:email}});
        if(user===null) res.status(400).json({error:"Invalid credentials!"});
        else{
            let valid=await bcryptjs.compare(password,user.password);
            if(valid) {
                let token=jwt.sign({id:user.id},process.env.SECRET,{expiresIn:'30d'});
                res.status(200).json({token:token});
            }
            else res.status(400).json({error:"not valid"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

exports.getUsers=async(req,res)=>{
    try {
        const users=await User.findAll();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

exports.currUser=async(req,res)=>{
    try {
        res.status(200).send(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}