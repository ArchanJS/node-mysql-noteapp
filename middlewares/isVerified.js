const db=require('../models');
const User=db.users;

exports.isVerified=async(req,res,next)=>{
    try {
        const {email}=req.body;
        const user=await User.findOne({where:{email:email}});
        // console.log(user);
        if(user.verified===false) throw new Error("User is not verified!");
        next();
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
}