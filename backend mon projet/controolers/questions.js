const mongoose = require('mongoose');
const Cont = mongoose.model('questions');

const getquestions = (request, response) => {
    Cont.find()
        .exec((error, questions)=>{
            if(error){
                response
                    .status(400)
                    .json(error);
            }else{
                if(questions){
                    response
                        .status(201)
                        .json(questions);
                }else{
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
    console.log(request.body.questions)
    Cont.create({
        questions: request.body.questions,
        isUnique: request.body.isUnique,
        image: request.body.image,

        
    },(error, questions)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            response
                .status(201)
                .json(questions);
        }
    });

}


const updatequestions = (request, response) => {
    const questionsid = request.params.questionsid;

    Cont.findById(questionsid)
        .exec((error, questions) =>{
            if (!questions) {
                return response
                    .status(404)
                    .json({
                        "message": "questionsid not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            questions.questions= request.body.questions,
            questions.isUnique= request.body.isUnique,
            questions.image= request.body.image,
            questions.save((error, questions) => {
                if (error) {
                    response
                        .status(404)
                        .json(error);
                } else {
                    response
                        .status(200)
                        .json(questions);
                }
            });
        });
}

const deletequestions = (request, response) => {
    const {questionsid} = request.params;
    if (questionsid) {
        Cont
            .findByIdAndRemove(questionsid)
            .exec((error, questions) => {
                    if (error) {
                        return response
                            .status(404)
                            .json(error);
                    }
                    response
                        .status(204)
                        .json(null);
                }
            );
    } else {
        response
            .status(404)
            .json(
                {"message": "No questions"
            });
    }
}

const readquestions = (request, response) => {
    const questionsid = request.params.questionsid;
    Cont
        .findById(questionsid)
        .exec((err, questions) => {
            if (!questions) {
                return response
                    .status(404)
                    .json({
                        "message": "questions not found"
                    });
            } else if (err) {
                return response
                    .status(404)
                    .json(err);
            }
            response
                .status(200)
                .json(questions);

        });
    }



module.exports = {
    getquestions,
    createquestions,
   updatequestions,
    deletequestions,
   readquestions
   
}