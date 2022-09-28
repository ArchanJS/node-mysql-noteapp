const db=require('../models');
const Note=db.notes;

exports.check=async(req,res,next)=>{
    try {
        let {title,description}=req.body;
        let note=await Note.findByPk(req.params.pk);
        if(note===null) res.status(400).json({error:"Primary key is not valid"});
        let obj={};
        if(title&&title.trim()) obj.title=title;
        if(description&&description.trim()) obj.description=description;
        req.data=obj;
        next();
    } catch (error) {
        res.status(500).send({error:"Something went wrong!"});
    }
}