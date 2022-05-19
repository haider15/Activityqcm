const mongoose = require('mongoose');
const LanguageShema =new mongoose.Schema({
name:{
type :string,
require:true
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
    type:sccore,
    "default":70
}


});

mongoose.model("language",LanguageShema);