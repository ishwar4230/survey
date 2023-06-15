const mongoose=require('mongoose');

const testSchema= new mongoose.Schema({
    origin:String,
    destn:String,
    timeb:String,
    traveltime:String
});

module.exports=mongoose.model("tests",testSchema);
