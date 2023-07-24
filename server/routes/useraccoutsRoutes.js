'use strict';

const express = require('express');
const userAccoutController = require('../Controllers/userAccoutController');
const router = express.Router();

const { getAllUserAccouts,
        getAUserAccoutInfo,
        getAUserAccoutRanking,
        addUserAccout,
        addUserAccoutSendingDelMess,
        updateUserAccountInfo,
        getAUserAccout,
        getAUserAccoutSendingDelMess,
        getAUserAccoutPassOnly,
        updateUserAccountPassOnlyById

        
    } = userAccoutController;

router.get('/', getAllUserAccouts);
router.get('/profile/:id', getAUserAccoutInfo);
router.get('/:id', getAUserAccoutInfo);
router.get('/changepassword/:id', getAUserAccoutPassOnly);
router.get('/profile/:id', getAUserAccoutRanking);
router.get('/maindashboard/:id', getAUserAccoutSendingDelMess);
router.post('/', addUserAccout);
router.post('/maindashboard/:id', addUserAccoutSendingDelMess);
router.put('/profile/:id', updateUserAccountInfo);
router.put('/changepassword/:id', updateUserAccountPassOnlyById);


module.exports = {
    routes: router
};