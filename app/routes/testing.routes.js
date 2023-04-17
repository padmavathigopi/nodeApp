const { Router } = require("express");

module.exports= app =>{
    const testingtables = require("../controllers/testing.controller.js");
    var router=require("express").Router();
    router.post("/", testingtables.create);
    router.put("/:id",testingtables.update);
    router.delete("/:id",testingtables.delete);
    router.get("/:id",testingtables.readSingle);
    router.delete("/",testingtables.deleteAll);
    router.get("/",testingtables.findAll);
    router.get("/publish",testingtables.findAllPublished);
    app.use('/api/testingtables',router);
    

};