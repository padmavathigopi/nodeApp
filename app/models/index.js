const dbConfig = require("../config/db.config.js");
const Sequelize=require("sequelize");
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorAliases:false,
    pool:{
        max:dbConfig.max,
        min:dbConfig.min,
        acquire:dbConfig.acquire,
        idle:dbConfig.idle
    }
});

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;


db.testingtables=require("./testing.model.js")(sequelize,Sequelize);
module.exports=db;


