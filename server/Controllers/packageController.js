'use strict';

const packageData = require('../db/Packages');

const getAllPackages = async (req, res, next) => {
    try{

        const packages = await packageData.getPackages();
        res.status(200).json({
            status: "OK",
            data: {
              packages: packages
            },
          });

    } catch(error){
        res.status(400).send(error.message);
}
}

const getAPackage = async (req, res, next) => {
    try {
        const idpackage = req.params.id;
        console.log("🚀 ~ file: packageController.js:24 ~ getAPackage ~ id:", idpackage)
        const Apackage = await packageData.getByIdPackage(idpackage);
        console.log("🚀 ~ file: packageController.js:26 ~ getAPackage ~ package:", Apackage)
        res.status(200).json({
            status: "OK",
            data: {
              package: Apackage,
            },
          });
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addPackage = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await packageData.createPackage(data);
        res.status(200).json({
            status: "OK",
            data: {
              package: created
            },
          });
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
  getAllPackages,
    getAPackage,
    addPackage
}