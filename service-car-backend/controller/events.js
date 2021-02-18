const { response } = require("express");

const Vehicle = require('../models/Vehicle');

const createVehicle = async (req, res = response )=> {

    try {
        
        const vehicle = new Vehicle( req.body );
        await vehicle.save();
    
        return res.status(201).json({
            status: 'OK',
            msg:'Vehicle added'
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok:false,
            msg:'cannnot add vehicle'
        })
    }
}

const updateVehicleById = async (req, res = response )=> {
    const { id } = req.params;
    const { status, estimatedate } = req.body;

    try {
        
        let vehicle = await Vehicle.findById( id )
    
        if( !vehicle ) {
            return res.status(404).json({
                status: false,
                msg: 'Vehicle not exist'
            })
        }
        /* const vehicleUpdated = { 
            ...vehicle,
            estimatedate 
        }; */

/*         var vehicleUpdated = {estimatedate: Date.now()};
        _.extend(vehicleUpdated, vehicle); */


/*         vehiculeUpdated.status = status;
        vehiculeUpdated.estimatedate = estimatedate;
         */
        /* console.log('car to update:', vehicleUpdated ); */
        console.log('Updating...', id, status, estimatedate);

        
        /* const updated = Vehicle.findByIdAndUpdate( id , { $set: { status: status },} , { new: true },  */
        const updated = Vehicle.findByIdAndUpdate( id , req.body , { new: true }, 
            function(err, result) {
                if (err) {
                    /* console.log('Que esta pasanda'); */
                    res.send(err);
                } else {
                    /* console.log('Se debio de actualizar'); */
                    res.send(result);
                }
            }
         );


        /* return res.json({
            status: 'OK'            
        }) */
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            status: false,
            msg: 'error triying udpated vehicle'
        })
    }

}

const getAllVehicles = async (req, res = response ) => {

    try {
        
        const vehicles = await Vehicle.find({});
        res.status(200).json({
            status: 'OK',
            data: vehicles
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createVehicle,
    getAllVehicles,
    updateVehicleById,
}