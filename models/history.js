const {DataTypes}=require('sequelize')

const History=(sequelize)=>{
    return sequelize.define('history',{
        id:{
            type:DataTypes.INTEGER,
            PrimaryKey:true,
            AutoIncrement:true,
            allowNull:true,
        },
        club_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            reference:{
                model:'club',
                key:'id',
            },
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        place:{
            type:DataTypes.STRING(20),
            alllowNull:false,
        },
        startTime:{
            type:DataTypes.DATETIME,
            allowNull:false,
        },
        endTime:{
            type:DataTypes.DATETIME,
            allowNull:false,
        },
        memo:{
            type:DataTypes.STRING(500),
            allowNull:false,
        },
    });
};
module.exports=History;