const {createNote,getAllNotes,getNoteByPk,updateNote,deleteNote}=require('../controllers/note.con');
const {check}=require('../middlewares/check');
const {auth}=require('../middlewares/auth');
const noteRoutes=(app)=>{
    app.post('/create',auth,createNote);
    app.get('/getall',getAllNotes);
    app.get('/getbypk/:pk',getNoteByPk);
    app.put('/update/:pk',check,auth,updateNote);
    app.delete('/delete/:pk',auth,deleteNote);
}

module.exports=noteRoutes;