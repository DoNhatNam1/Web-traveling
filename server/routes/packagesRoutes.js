'use strict';

const express = require('express');
const packageController = require('../Controllers/packageController');
const router = express.Router();

const { getAllPackages,
        getAPackage,
        addPackage 
        
    } = packageController;

router.get('/', getAllPackages);
router.get('/viewpackage/:id', getAPackage);
router.post('/', addPackage);

module.exports = {
    routes: router
};