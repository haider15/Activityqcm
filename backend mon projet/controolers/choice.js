const mongoose = require('mongoose');
const Cont = mongoose.model('language');

/////get alll m d r
const getchoice = (request, response) => {
    const languageid = request.params.languageid;
    Cont
        .findById(languageid)
        .select('questions.choice')
        .exec((error, choice) => {
            if (error) {
                response
                    .status(400)
                    .json(error);
            } else {
                if (choice) {
                    response
                        .status(201)
                        .json(choice);
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
////////////////upodate sy z
const updatechoice = (request, response) => {
    if (!request.params.languageid || !request.params.questionsid || !request.params.choiceid) {
        return response
            .status(404)
            .json({
                "message": "Not found, languageid and questionsid and choice "
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

            const questions = language.questions.id(request.params.questionsid);
            if (questions && questions.choice.length > 0) {

                if (!questions) {
                    return response
                        .status(404)
                        .json({
                            "message": "questions not found"
                        });
                }
                const choice = questions.choice.id(request.params.choiceid);
                if (!choice) {
                    return response
                        .status(404)
                        .json({
                            "message": "choice not found "
                        });


                }
                else {
                    choice.choice = request.body.choice;
                    choice.repond = request.body.repond;
                    choice.img = request.body.img;
                    language.save((error, language) => {
                        if (error) {
                            return response
                                .status(400)
                                .json(error);
                        } else {
                            res = {
                                language: {
                                    name: language.name,
                                    id: request.params.languageid
                                },
                                questions: {
                                    question: questions.question,
                                    id: request.params.questions
                                },
                                choice
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
                        "message": "No choice found"
                    });
            }

        });
}
/////////read choice 
const readchoice = (request, response) => {
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
            const questions = language.questions.id(request.params.questionsid);

            if (questions && questions.choice.length > 0) {
                const choice = questions.choice.id(request.params.choiceid);
                if (!questions) {
                    return response
                        .status(404)
                        .json({
                            "message": "questions not found"
                        });
                }
                if (!choice) {
                    return response
                        .status(404)
                        .json({
                            "message": "choice not found"
                        });
                }
                else {
                    res = {
                        language: {
                            name: language.name,
                            id: request.params.languageid
                        },
                        questions: {
                            name: questions.question,
                            id: request.params.questionsid
                        },
                        choice
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
/////////////create
const createchoice = (request, response) => {
    const languageid = request.params.languageid;
    const questionsid = request.params.questionsid;
    if (languageid && questionsid) {
        Cont.findById(languageid)
            .select('questions')
            .exec((error, language) => {
                if (error) {
                    response
                        .status(400)
                        .json(error);
                } else {
                    doAddchoice(request, response, language, questionsid);
                }
            });
    } else {
        response
            .status(404)
            .json({ "message": "language not found" });
    }
}

const doAddchoice = (request, response, language, questionsid) => {
    const questions = language.questions.id(questionsid);
    questions.choice.push({
        choice: request.body.choice,
        repond: request.body.repond,
        img: request.body.img,

    });
    language.save((error, language) => {
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
/////////////////////////delete y z o 
const deletechoice = (request, response) => {
    const {languageid, questionsid,choiceid} = request.params;
    if (!languageid || !questionsid || !choiceid) {
        return response
            .status(404)
            .json({'message': 'Not found, languageid and questionsid and choice'});
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
                const questions = language.questions.id(request.params.questionsid);

                if (questions && questions.choice.length > 0) {
                    const choice = questions.choice.id(request.params.choiceid);
                    if (!questions) {
                        return response
                            .status(404)
                            .json({
                                "message": "questions not found"
                            });
                    }
                    if (!choice) {
                        return response
                            .status(404)
                            .json({
                                "message": "choice not found"
                            });
                    }
                    else {
                        questions.choice.id(choiceid).remove();
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
                    return response
                        .status(404)
                        .json({
                            "message": "No questions found"
                        });
                }
    
            });
}


module.exports = {
    getchoice,
    createchoice,
    updatechoice,
    deletechoice,
    readchoice

}