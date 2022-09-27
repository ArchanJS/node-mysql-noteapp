module.exports=(sequelize,DataTypes)=>{
    const Note=sequelize.define('notes',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:DataTypes.STRING,
        description:{
            type:DataTypes.TEXT,
            defaultValue:"Default content"
        }
    });
    return Note;
};