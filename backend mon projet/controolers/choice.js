const mongoose = require('mongoose');
const Cont = mongoose.model('choice');

const getchoice = (request, response) => {
    Cont.find()
        .exec((error, choice)=>{
            if(error){
                response
                    .status(400)
                    .json(error);
            }else{
                if(choice){
                    response
                        .status(201)
                        .json(choice);
                }else{
                    return response
                        .status(404)
                        .json({
                            "message": "choice not found"
                        });
                }
            }
        });
}

const createchoice = (request, response) => {
    console.log(request.body.name)
    Cont.create({
        choice: request.body.choice,
        img: request.body.img,
        istrue: request.body.istrue,
        
    },(error, choice)=>{
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            response
                .status(201)
                .json(choice);
        }
    });

}


const updatechoice = (request, response) => {
    const choiceid = request.params.choiceid;

    Cont.findById(choiceid)
        .exec((error, choice) =>{
            if (!choice) {
                return response
                    .status(404)
                    .json({
                        "message": "choiceid not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            choice.choice= request.body.choice;
            choice.img = request.body.img;
            choice.istrue = request.body.istrue;
           
            choice.save((error, choice) => {
                if (error) {
                    response
                        .status(404)
                        .json(error);
                } else {
                    response
                        .status(200)
                        .json(choice);
                }
            });
        });
}

const deletechoice = (request, response) => {
    const {choiceid} = request.params;
    if (choiceid) {
        Cont
            .findByIdAndRemove(choiceid)
            .exec((error, choice) => {
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
                {"message": "No choice"
            });
    }
}

const readchoice = (request, response) => {
    const choiceid = request.params.choiceid;
    Cont
        .findById(choiceid)
        .exec((err, choice) => {
            if (!choice) {
                return response
                    .status(404)
                    .json({
                        "message": "choice not found"
                    });
            } else if (err) {
                return response
                    .status(404)
                    .json(err);
            }
            response
                .status(200)
                .json(choice);

        });
    }



module.exports = {
    getchoice,
    createchoice,
    updatechoice,
    deletechoice,
    readchoice
   
}