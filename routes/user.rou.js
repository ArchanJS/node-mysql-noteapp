const {signUp,signIn,currUser}=require('../controllers/user.con');
const {auth}=require('../middlewares/auth');
const userRoutes=(app)=>{
    app.post('/createuser',signUp);
    app.post('/signin',signIn);
    app.get('/curruser',auth,currUser);
}

module.exports=userRoutes;