const { Sequelize } = require("sequelize");

module.exports={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"",
    DB:"testing_db",
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
};
