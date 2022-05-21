const mongoose=require("mongoose");
const choiceSchema=mongoose.Schema({
choice:{
    type:String,
    required:true
},
istrue:{
    type:Boolean,
    required:true
},
questions:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'questions'
},
img:{
    type:String,
    required:true
}
})
mongoose.model("choice",choiceSchema)