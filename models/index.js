const {Sequelize,DataTypes}=require('sequelize')
const sequelize=require('../config/database')

const User=require('./user')(sequelize)
const Club=require('./club')(sequelize)
const Member=require('./member')(sequelize)
const Activity=require('./activity')(sequelize)
const History=require('./history')(sequelize)
const Schedule=require('./schedule')(sequelize)
const Apply=require('./apply')(sequelize)

module.exports={
    User,
    Club,
    Member,
    Activity,
    History,
    Schedule,
    Apply,
}