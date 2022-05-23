const mongoose = require('mongoose');
const Cont = mongoose.model('language');




const getquestions = (request, response) => {
    const languageid = request.params.languageid;
    Cont.findById(languageid)
        .select('questions')
        .exec((error, questions) => {
            if (error) {
                response
                    .status(400)
                    .json(error);
            } else {
                if (questions) {
                    response
                        .status(201)
                        .json(questions);
                } else {
                    return response
                        .status(404)
                        .json({
                            "message": "question not found"
                        });
                }
            }
        });
    }

const createquestions = (request, response) => {
    const languageid = request.params.languageid;
    if(languageid) {
        Cont.findById(languageid)
            .select('questions')
            .exec((error, language)=>{
                if(error){
                    response
                        .status(400)
                        .json(error);
                }else{
                    doAddquestions(request, response, language);
                }
            });
    }else{
        response
            .status(404)
            .json({"message": "language not found"});
    }
}


const doAddquestions= (request, response, language) =>{
    language.questions.push({
        question: request.body.question,
        isUnique: request.body.isUnique,
        istrue: request.body.istrue,
      
    });

    language.save((error, language)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            let questions = language.questions[language.questions.length - 1];
            response
                .status(201)
                .json(questions);
        }
    });
}



const updatequestions = (request, response) => {
    if (!request.params.languageid || !request.params.questionsid) {
        return response
            .status(404)
            .json({
                "message": "Not found, languageid and questionsid are both required"
            });
    }
    Cont
        .findById(request.params.languageid)
        .select(' name questions')
        .exec((error, language) => {
            if (!language) {
                return response
                    .status(404)
                    .json({
                        "message": "language not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            if (language.questions && language.questions.length > 0) {
                const questions = language.questions.id(request.params.questionsid);
                if (!questions) {
                    return response
                        .status(400)
                        .json({
                            "message": "questions not found 2"
                        });
                } else {
                    questions.question = request.body.question;
                    questions.isUnique = request.body.isUnique;
                    questions.repond = request.body.istrue;
                    language.save((error, language)=>{
                        if(error){
                            return response
                                .status(400)
                                .json(error);
                        }else{
                            res = {
                                language: {
                                    name: language.name,
                                    id: request.params.languageid
                                },
                                questions
                            };
                            return response
                                .status(200)
                                .json(res);
                        }
                    });

                }
            } else {
                return response
                    .status(404)
                    .json({
                        "message": "No questions found"
                    });
            }

        });
}
const deletequestions = (request, response) => {
    const {languageid, questionsid} = request.params;
    if (!languageid || !questionsid) {
        return response
            .status(404)
            .json({'message': 'Not found, languageid and questionsid are both required'});
            }
        Cont
            .findById(languageid)
            .select('questions')
            .exec((error, language) => {
                if (!language) {
                    return response
                        .status(404)
                        .json({'message': 'language not found'});
                } else if (error) {
                    return response
                        .status(400)
                        .json(error);
                }
                if (language.questions && language.questions.length > 0) {
                    if (!language.questions.id(questionsid)) {
                        return response
                            .status(404)
                            .json({'message': 'questions not found'});
                    } else {
                        language.questions.id(questionsid).remove();
                        language.save(error => {
                            if (error) {
                                return response
                                    .status(404)
                                    .json(error);
                            } else {
                                response
                                    .status(204)
                                    .json(null);
                            }
                        });
                    }
                } else {
                    res
                        .status(404)
                        .json({'message': 'No Review to delete'});
                }
            });
}


const readquestions = (request, response) => {
    Cont
        .findById(request.params.languageid)
        .select('name questions')
        .exec((error, language) => {
            if (!language) {
                return response
                    .status(404)
                    .json({
                        "message": "language not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error15);
            }

            
            if (language.questions && language.questions.length > 0) {
                const questions = language.questions.id(request.params.questionsid);
                if (!questions) {
                    return response
                        .status(400)
                        .json({
                            "message": "questions not found"
                        });
                } else {
                    res = {
                        language: {
                            name: language.name,
                            id: request.params.languageid
                        },
                        questions
                    };
                    return response
                        .status(200)
                        .json(res);
                }
            } else {
                return response
                    .status(404)
                    .json({
                        "message": "No questions found"
                    });
            }

        });
}



module.exports = {
    getquestions,
    createquestions,
  updatequestions,
  deletequestions,
    readquestions
   
} 