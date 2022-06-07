const mongoose = require("mongoose");

const KurtiSchema = new mongoose.Schema({

    imgUrl : {type : String , required : true },
    price : {type : Number , required : true },
    size : {type : String , required : true },
    colour : {type : String , required : true },
    brand : {type : String , required : true }
})

module.exports = mongoose.model("kurti", KurtiSchema)