'use strict';

const UserAccoutData = require('../db/UserAccouts');

const getAllUserAccouts = async (req, res, next) => {
    try{
        const packages = await UserAccoutData.getUserAccout();
        res.status(200).json({
            status: "OK",
            datauseraccout: {
              useraccouts: packages
            },
          });

    } catch(error){
        res.status(400).send(error.message);
}
}

const getAUserAccout = async (req, res, next) => {
    try {
        const iduseraccout = req.params.id;
        console.log("🚀 ~ file: userAccoutController.js:24 ~ getAUserAccout ~ iduseraccout:", iduseraccout)

        const Auseraccout = await UserAccoutData.getByIdUserAccout(iduseraccout);
        console.log("🚀 ~ file: userAccoutController.js:27 ~ getAUserAccout ~ Auseraccout:", Auseraccout)

        res.status(200).json({
            status: "OK",
            datauseraccout: {
                useraccout: Auseraccout
            },
          });
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUserAccout = async (req, res, next) => {
    try {
        const datauseraccouts = req.body;
        const created = await UserAccoutData.createUserAccout(datauseraccouts);
        res.status(200).json({
            status: "OK",
            datauseraccout: {
                useraccout: created
            },
          });
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getAllUserAccouts,
    getAUserAccout,
    addUserAccout
}