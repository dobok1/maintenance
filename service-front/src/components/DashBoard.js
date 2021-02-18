import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehicles } from '../actions/vehicleAction';
import { ModalVehicule } from './vehicles/ModalVehicule';
import { Vehicles } from './vehicles/Vehicles';

export const DashBoard = () => {

    const { vehicles: cars } = useSelector(state => state.vehicle);
    const dispatch = useDispatch();

    const getVehicles = () => {

        dispatch( getAllVehicles() );
    }

    useEffect(() => {
        getVehicles();
    }, []);

    const memoVehicles = useMemo(() => <Vehicles cars={ cars } />, [ cars ]);
    const memoModal = useMemo(() => <ModalVehicule />, [ ]);

    return (
        <>
            <h1> Lista de Autos </h1>
            <div className="row">
                <div className="col">
                    {
                        cars && memoVehicles
                    }
                </div>
            </div>            
            {memoModal}
        </>
    )
}
