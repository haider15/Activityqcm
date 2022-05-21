const mongoose = require('mongoose');
const LanguageShema =new mongoose.Schema({
name:{
type :String,
required:true
},

version:{
    type :String,
    required:true
},

src:{
    type :String,
    required:true
},

description:{
    type :String,
    required:true
},
nbrQuestion:{
    type:Number,
    required:true

},

passSccore:{
    type:Number,
    "default":70
}


});

mongoose.model("language",LanguageShema);