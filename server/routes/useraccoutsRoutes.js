'use strict';

const express = require('express');
const userAccoutController = require('../Controllers/userAccoutController');
const router = express.Router();

const { getAllUserAccouts,
        getAUserAccout,
        addUserAccout 
        
    } = userAccoutController;

router.get('/', getAllUserAccouts);
router.get('/viewuseraccout/:id', getAUserAccout);
router.post('/', addUserAccout);

module.exports = {
    routes: router
};