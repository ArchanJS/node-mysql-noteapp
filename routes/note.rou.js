const {createNote,getAllNotes,getNoteByPk,updateNote,deleteNote}=require('../controllers/note.con');
const {check}=require('../middlewares/check');
const noteRoutes=(app)=>{
    app.post('/create',createNote);
    app.get('/getall',getAllNotes);
    app.get('/getbypk/:pk',getNoteByPk);
    app.put('/update/:pk',check,updateNote);
    app.delete('/delete/:pk',deleteNote);
}

module.exports=noteRoutes;