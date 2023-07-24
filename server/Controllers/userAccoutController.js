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

const getAUserAccoutInfo = async (req, res, next) => {
    try {
        const iduseraccoutinfo = req.params.id;
        console.log("🚀 ~ file: userAccoutController.js:23 ~ getAUserAccoutInfo ~ iduseraccoutinfo:", iduseraccoutinfo)


        const Auseraccoutinfo = await UserAccoutData.getByIdUserAccoutInfo(iduseraccoutinfo);
        console.log("🚀 ~ file: userAccoutController.js:27 ~ getAUserAccoutInfo ~ Auseraccoutinfo:", Auseraccoutinfo)
        

        res.status(200).json({
            status: "OK",
            datauseraccout: {
                useraccoutinfo: Auseraccoutinfo
            },
          });
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAUserAccout = async (req, res, next) => {
    try {
        const iduseraccout = req.params.id;
        console.log("🚀 ~ file: userAccoutController.js:45 ~ getAUserAccout ~ iduseraccout:", iduseraccout)

        const Auseraccout = await UserAccoutData.getByIdUserAccout(iduseraccout);
        console.log("🚀 ~ file: userAccoutController.js:48 ~ getAUserAccout ~ Auseraccout:", Auseraccout)
        

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

const getAUserAccoutPassOnly = async (req, res, next) => {
    try {
        const iduseraccoutpassonly = req.params.id;
        console.log("🚀 ~ file: userAccoutController.js:66 ~ getAUserAccoutPassOnly ~ iduseraccoutpassonly:", iduseraccoutpassonly)


        const Auseraccoutpassonly = await UserAccoutData.getByIdUserAccoutPasswordOnly(iduseraccoutpassonly);
        console.log("🚀 ~ file: userAccoutController.js:70 ~ getAUserAccoutPassOnly ~ Auseraccoutpassonly:", Auseraccoutpassonly)
        

        res.status(200).json({
            status: "OK",
            datauseraccout: {
                useraccoutpassonly: Auseraccoutpassonly
            },
          });
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAUserAccoutSendingDelMess = async (req, res, next) => {
    try {
        const iduseraccoutsendingdelmess = req.params.id;
        console.log("🚀 ~ file: userAccoutController.js:88 ~ getAUserAccoutSendingDelMess ~ iduseraccoutsendingdelmess:", iduseraccoutsendingdelmess)


        const Auseraccoutsendingdelmess = await UserAccoutData.getByIdUserAccountSendingDelMess(iduseraccoutsendingdelmess);
        console.log("🚀 ~ file: userAccoutController.js:92 ~ getAUserAccoutSendingDelMess ~ Auseraccoutsendingdelmess:", Auseraccoutsendingdelmess)
        

        res.status(200).json({
            status: "OK",
            datauseraccoutsendingdelmess: {
                useraccoutsendingdelmess: Auseraccoutsendingdelmess
            },
          });
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAUserAccoutRanking = async (req, res, next) => {
    try {
        const iduseraccoutranking = req.params.id;
        console.log("🚀 ~ file: userAccoutController.js:43 ~ getAUserAccoutRanking ~ iduseraccoutranking:", iduseraccoutranking)


        const Auseraccoutranking = await UserAccoutData.getByIdUserAccoutRanking(iduseraccoutranking);
        console.log("🚀 ~ file: userAccoutController.js:27 ~ getAUserAccout ~ Auseraccout:", Auseraccoutranking)

        res.status(200).json({
            status: "OK",
            datauseraccout: {
                useraccoutranking: Auseraccoutranking
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

const addUserAccoutSendingDelMess = async (req, res, next) => {
    try {
        const datauseraccoutsSendingDelMess = req.body;
        const createdSendingDelMess = await UserAccoutData.createUserAccoutSendingDelMess(datauseraccoutsSendingDelMess);
        res.status(200).json({
            status: "OK",
            datauseraccoutsendingdelmess: {
                useraccoutsendingdelmess: createdSendingDelMess
            },
          });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUserAccountInfo = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updateduseraccount = await UserAccoutData.updateUserAccout(id, data);
        
        res.status(200).json({
            status: "OK",
            datauseraccout: {
                useraccout: updateduseraccount
            },
          });
    } catch (error) {
        res.status(400).send(error.message);
    }
    }

    const updateUserAccountPassOnlyById = async (req, res, next) =>{
        try {
            const id = req.params.id;
            const data = req.body;
            const updateduseraccountpassonly = await UserAccoutData.updateUserAccoutPassOnly(id, data);
            
            res.status(200).json({
                status: "OK",
                datauseraccout: {
                    useraccoutpassonly: updateduseraccountpassonly
                },
              });
        } catch (error) {
            res.status(400).send(error.message);
        }
        }



module.exports = {
    getAllUserAccouts,
    getAUserAccoutInfo,
    getAUserAccoutRanking,
    getAUserAccout,
    getAUserAccoutPassOnly,
    getAUserAccoutSendingDelMess,
    addUserAccout,
    updateUserAccountInfo,
    addUserAccoutSendingDelMess,
    updateUserAccountPassOnlyById
}