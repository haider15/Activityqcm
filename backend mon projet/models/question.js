const mongoose = require('mongoose');
const questionShema =new mongoose.Schema({
nbranswer:{
type:Number,
required:true
},

nbrcorrect:{
    type:Number,
    required:true

},
question:String,
language:{
    type:Schema.Types.ObjectId,
    ref:"language"
}






})
mongoose.model("question",questionShema);