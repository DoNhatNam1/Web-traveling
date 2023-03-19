'use strict';

const express = require('express');
const userController = require('../Controllers/userController');
const router = express.Router();

const { getUsers, getUser, addUser, updateUser, deleteUser } = userController;

router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.post('/user', addUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = {
    routes: router
};