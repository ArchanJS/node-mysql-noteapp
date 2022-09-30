module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('users',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING
    });
    return User;
};