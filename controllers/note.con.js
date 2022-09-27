const db=require('../models');
const Note=db.notes;

exports.createNote=async(req,res)=>{
    try {
        const {title,description}=req.body;
        const note=await Note.create({title,description});
        await note.save();
        res.status(201).json({message:"Note created!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

exports.getAllNotes=async(req,res)=>{
    try {
        const notes=await Note.findAll();
        res.status(200).send(notes);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

exports.getNoteByPk=async(req,res)=>{
    try {
        const note=await Note.findByPk(req.params.pk);
        res.status(200).send(note);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

exports.updateByPk=async(req,res)=>{
    try {
        let obj={};
        if(req.body.title&&req.body.title.trim()) obj.title=req.body.title;
        if(req.body.description&&req.body.description.trim()) obj.description=req.body.description;
        await Note.update(obj,{where:{id:req.params.pk}});
        res.status(200).json({message:"Note updated!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}

exports.deleteByPk=async(req,res)=>{
    try {
        await Note.destroy({where:{id:req.params.pk}});
        res.status(200).json({message:"Note deleted!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
}