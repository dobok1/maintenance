import React, { useEffect, useState } from 'react';
import { getAllVehicles } from '../actions/vehicleAction';
import { ModalVehicule } from './vehicles/ModalVehicule';
import { Vehicles } from './vehicles/Vehicles';

export const DashBoard = () => {

    const [ vehicles, setVehicles ] = useState([]);

    const getVehicles = async () => {
        const all = await getAllVehicles()
        setVehicles(all);
    }


    useEffect(() => {
        getVehicles();
    }, []);

    /*
     {/* <div className="col-12 d-flex">
                        <div className="m-2">Image</div>
                        <div className="m-2">Make</div>
                        <div className="m-2">Model</div>
                        <div className="m-2">Description</div>
                        <div className="m-2">Fecha programada</div>
                        <div className="m-2">Id del vehiculo</div>
                        <div className="m-2">Km actual </div>
                </div>
    */

    return (
        <>
            <h1>Vehicles List</h1>
            <div className="row">
                <div className="col">
                    {
                        vehicles && <Vehicles cars={ vehicles } />
                    }
                </div>
            </div>            
            <ModalVehicule />

        </>
    )
}
