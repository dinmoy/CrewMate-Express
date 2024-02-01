const {DataTypes}=require('sequelize');

const Hisotry=(sequelize)=>{
    return sequelize.define('history',{
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
        date:{
            type:DataTypes.DATETIME,
            allowNull:false,
        },
        thumbnail:{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
    });
};
module.exports=Hisotry;
