const mongoose = require('mongoose');
const Cont = mongoose.model('language');

const getlanguages = (request, response) => {
    Cont.find()
        .exec((error, language)=>{
            if(error){
                response
                    .status(400)
                    .json(error);
            }else{
                if(language){
                    response
                        .status(201)
                        .json(language);
                }else{
                    return response
                        .status(404)
                        .json({
                            "message": "language not found"
                        });
                }
            }
        });
}

const createlanguage = (request, response) => {
    console.log(request.body.name)
    Cont.create({
        name: request.body.name,
        src: request.body.src,
        version: request.body.version,
        description: request.body.description,
        nbrQuestion: request.body.nbrQuestion,
        passSccore: request.body.passSccore,
    },(error, language)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            response
                .status(201)
                .json(language);
        }
    });

}


const updatelanguage = (request, response) => {
    const languageid = request.params.languageid;

    Cont.findById(languageid)
        .exec((error, language) =>{
            if (!language) {
                return response
                    .status(404)
                    .json({
                        "message": "languageid not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            language.name= request.body.name;
            language.version = request.body.version;
            language.src = request.body.src;
            language.description = request.body.description;
            language.nbrQuestion = request.body.nbrQuestion;
            language.passSccore = request.body.passSccore
            language.save((error, language) => {
                if (error) {
                    response
                        .status(404)
                        .json(error);
                } else {
                    response
                        .status(200)
                        .json(language);
                }
            });
        });
}

const deletelanguage = (request, response) => {
    const {languageid} = request.params;
    if (languageid) {
        Cont
            .findByIdAndRemove(languageid)
            .exec((error, language) => {
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
                {"message": "No language"
            });
    }
}

const readlanguage = (request, response) => {
    const languageid = request.params.languageid;
    Cont
        .findById(languageid)
        .exec((err, language) => {
            if (!language) {
                return response
                    .status(404)
                    .json({
                        "message": "language not found"
                    });
            } else if (err) {
                return response
                    .status(404)
                    .json(err);
            }
            response
                .status(200)
                .json(language);

        });
    }



module.exports = {
    getlanguages,
    createlanguage,
    updatelanguage,
    deletelanguage,
    readlanguage
   
}