const {DataTypes}=require('sequelize');

const Activity=(sequelize)=>{
    return sequelize.define('activity',{
        id:{
            type:DataTypes.INTEGER,
            PrimaryKey:true,
            AutoIncrement:true,
            allowNull:true,
        },
        club_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'club',
                key: 'id',
            },
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        thumbnail:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
    });
};
module.exports=Activity;