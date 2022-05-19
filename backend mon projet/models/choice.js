const mongoose=require("mongoose");
const langageSchema=mongoose.Schema({
choice:{String,
required:true},
istrue:{type:Boolean,
    required:true
},
question    :{
    type:Schema.Types.ObjectId,
    ref:"question"
},
img:String



})
mongoose.model("langage",langageSchema)