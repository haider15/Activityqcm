const mongoose = require('mongoose');


const choiceSchema=mongoose.Schema({
    choice:{
        type:String,
        required:true
    },
    repond:{
        type:String,
        //required:true
    },
   
    img:{
        type:String,
        required:true
    }
    });




const questionsSchema = new mongoose.Schema({
    question: {
        type: String,
       required: true
    },
    isUnique: {
        type: String,
       required: true
    },
    istrue: {
        type: String,
       required: true
    },

    choice: [choiceSchema]
});








const LanguageShema =new mongoose.Schema({

name:{
type :String,
required:true
},

version:{
    type :String,
   
},

src:{
type:String
},


description:{
    type :String,
    required:true
},
nbrQuestion:{
    type:Number,
  

},

passSccore:{
    type:Number,
   
},
questions: [questionsSchema]



});

mongoose.model("language",LanguageShema);