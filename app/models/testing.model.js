module.exports=(sequelize,Sequelize)=>{
    const Testingtable=sequelize.define("testingtable",{
        title:{
            type:Sequelize.STRING
        },
        description:{
            type:Sequelize.STRING
        },
        author:{
            type:Sequelize.STRING
        },
        publish:{
            type:Sequelize.BOOLEAN
        }

    });
    return Testingtable;
};
