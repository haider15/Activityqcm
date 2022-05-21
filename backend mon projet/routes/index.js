var express = require('express');

var router = express.Router();

const { getlanguages, createlanguage , updatelanguage ,deletelanguage,readlanguage } = require('../controolers/language');
const { getquestions, createquestions ,deletequestions,updatequestions ,readquestions } = require('../controolers/questions');
const { getchoice, createchoice ,deletechoice,updatechoice ,readchoice } = require('../controolers/choice');

//language
router.route('/language')
    .get(getlanguages)
    .post(createlanguage);

    router.route('/language/:languageid')
    .get(readlanguage)
    .put(updatelanguage)
    .delete(deletelanguage);

//question 
router.route('/questions')
    .get(getquestions)
    .post(createquestions);

   router.route('/questions/:questionsid')
   .get(readquestions)
    .put(updatequestions)
    .delete(deletequestions);


//choice

router.route('/choice')
    .get(getchoice)
    .post(createchoice);

   router.route('/choice/:choiceid')
   .get(readchoice)
    .put(updatechoice)
    .delete(deletechoice);    


module.exports = router;
