const db=require("../models");
const Testingtable=db.testingtables;
const Op=db.Sequelize.Op;
exports.create=(req, res)=>{
    if(!req.body.title){
        res.status(400).send({
            message:"title should not be empty !"
        });
        return;
    }
    const testingtable={
        title:req.body.title,
        description:req.body.description,
        author:req.body.author,
        publish:req.body.publish ?req.body.publish:false,
    };
    Testingtable.create(testingtable)
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({message:"some error occurs!" + err.message})
    });
    
};

exports.update=(req,res)=>{
    const id=req.params.id;
    Testingtable.update(req.body,{
        where:{
            id:id,
        }
    }).then(num=>{
        if(num==1){
            res.send({
                message:"table was updated " 
             });
        }else{
            res.send({
                message:`this table cannot updated with id=${id}`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message:"error occur with this id ="+id
        });
    });

};

exports.delete=(req,res)=>{
const id=req.params.id;
Testingtable.destroy({
    where :{
        id:id
    }
}).then(num=>{
    if(num==1){
        res.send({
            message:"row deleted successfully"
        });
    }else{
        res.send({
            message:"error occurs with id"+id
        });
    }
}).catch(err=>{
    res.status(500).send({
        message:"error occur with this id ="+id
    });
});
};

exports.readSingle=(req,res)=>{
const id=req.params.id;
Testingtable.findByPk(id).then(data=>{
    if(data){
        res.send(data);
    }else{
res.status(404).send({
    message:"cannot find value"+id
});
    }
}).catch(err=>{
    res.status(500).send({
        message:"error occur with this id ="+id
    });
});
};



exports.deleteAll=(req,res)=>{
    Testingtable.destroy({
        where:{},
        truncate:false
    }).then(nums=>{
        res.send({
            message:`${nums} these all deleted successfully`
        });
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"error occurs while delete all"
        });
    });

};
exports.findAll=(req,res)=>{
    const title=req.query.title;
    var condition=title? {
title:{
    [Op.like]:  `%${title}%`
}
    } :null;
Testingtable.findAll({
    where:condition
}).then(data=>{
    res.send(data);
}).catch(err=>{
    res.status(500).send({
        message:err.message||"error occurs while find all"
    });
});

};
exports.findAllPublished=(req,res)=>{
    Testingtable.findAll({
        where:{
            publish:true
        }
    }).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"error occurs this particular data"
        });
    });
};