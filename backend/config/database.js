const mongoose = require("mongoose");

const connectDatabase = () =>{
    mongoose.connect('mongodb://0.0.0.0:27017/Ecommerce',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       
    }).then((data)=>{
        console.log(`Mongodb database is connect with:${data.connection.host}`)
    })
}


module.exports = connectDatabase;