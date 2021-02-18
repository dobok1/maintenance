/*
    Event Vehicle
    /api/vehicle
 */

const { Router } = require('express');
const router = Router();

const { getAllVehicles, 
        createVehicle, 
        updateVehicleById 
    } = require('../controller/events');

router.post('/new', createVehicle );
router.put('/:id', updateVehicleById );
router.get('/all', getAllVehicles );

module.exports = router;