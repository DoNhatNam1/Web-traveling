'use strict';

const userData = require('../db/Users');

const getUsers = async (req, res, next) => {
    try{

        const users = await userData.getUsers();
        res.status(200).json({
            status: "OK",
            data: {
              users: users
            },
          });

    } catch(error){
        res.status(400).send(error.message);
}
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("🚀 ~ file: userController.js:24 ~ getUser ~ id:", id)
        const user = await userData.getById(id);
        console.log("🚀 ~ file: userController.js:26 ~ getUser ~ oneUser:", user)
        res.status(200).json({
            status: "OK",
            data: {
              user: user,
            },
          });
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await userData.createUser(data);
        res.status(200).json({
            status: "OK",
            data: {
              user: created
            },
          });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) =>{
try {
    const id = req.params.id;
    const data = req.body;
    const updated = await userData.updateUser(id, data);
    
    res.status(200).json({
        status: "OK",
        data: {
          user: updated
        },
      });
} catch (error) {
    res.status(400).send(error.message);
}
}

const deleteUser = async (req, res, next) => {
try {
    const makhach = req.params.id;
    const deleteduser = await userData.deleteUser(makhach);
    res.status(200).json({
        status: "OK",
        data: {
          user: deleteduser
        },
      });
} catch (error) {
    res.status(400).send(error.message);
}
};

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}