const jwt=require('jsonwebtoken');
const db=require('../models');
const User=db.users;

exports.auth=async(req,res,next)=>{
    try {
        const token=req.headers["x-access-token"];
        if(!token) throw new Error("Token is absent!");
        else{
            const obj=jwt.verify(token,process.env.SECRET);
            const user=await User.findByPk(obj.id);
            req.user=user;
        }
        next();
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
}