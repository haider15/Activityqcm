const mongoose = require('mongoose');
const Cont = mongoose.model('language');

const getlanguages = (request, response) => {
    Cont.find()
        .exec((error, languages)=>{
            if(error){
                response
                    .status(400)
                    .json(error);
            }else{
                if(language){
                    response
                        .status(201)
                        .json(languages);
                }else{
                    return response
                        .status(404)
                        .json({
                            "message": "contact not found"
                        });
                }
            }
        });
}

const createlanguage = (request, response) => {
    console.log(request.body.firstName)
    Cont.create({
        name: {
            firstName: request.body.firstName,
            lastName: request.body.lastName
        },
        email: request.body.email,
        phone: request.body.phone,
        typeContact: request.body.typeContact
    },(error, contact)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            response
                .status(201)
                .json(contact);
        }
    });

}

module.exports = {
    getlanguages,
   
}