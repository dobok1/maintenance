const { Schema, model } = require('mongoose');


const VehicleSchema = Schema({

    make: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    km: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true
    },
    estimatedate: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
});

module.exports = model( 'Vehicle', VehicleSchema );
