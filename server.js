const express=require("express");
const cors=require("cors");
const parser=require("body-parser");
const path = __dirname + '/app/views/';
const app=express();
var corsOptions={
    origin:"http://localhost:8081"

};

app.use(cors(corsOptions));
app.use(express.static(path));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



const db=require("./app/models");
db.sequelize.sync().then(()=>{
    console.log("Database synced");
}
    ).catch((err) => {
        console.log("failed to sync"+err.message);
    });
    app.get('/', function (req,res) {
        res.sendFile(path + "index.html");
      });
    
app.get("/", (req,res) =>{
    res.json({message:"testing works !"})
});
require("./app/routes/testing.routes")(app);

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`port number : ${PORT}` );
});
