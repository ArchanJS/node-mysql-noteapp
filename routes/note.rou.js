const {createNote,getAllNotes,getNoteByPk,updateByPk,deleteByPk}=require('../controllers/note.con');
const noteRoutes=(app)=>{
    app.post('/create',createNote);
    app.get('/getall',getAllNotes);
    app.get('/getbypk/:pk',getNoteByPk);
    app.put('/update/:pk',updateByPk);
    app.delete('/remove/:pk',deleteByPk);
}

module.exports=noteRoutes;