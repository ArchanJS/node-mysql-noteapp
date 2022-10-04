const {signUp,signIn,currUser,verify,getUsers}=require('../controllers/user.con');
const {auth}=require('../middlewares/auth');
const {isVerified}=require('../middlewares/isVerified');
const userRoutes=(app)=>{
    app.post('/createuser',signUp);
    app.put('/verify',verify);
    app.post('/signin',isVerified,signIn);
    app.get('/allusers',getUsers);
    app.get('/curruser',auth,currUser);
}

module.exports=userRoutes;