import React from 'react';
import { Vehicle } from './Vehicle';
import { VehicleHeader } from './VehicleHeader';

export const Vehicles = ({ cars }) => {
    return (
        <>
             <table className="table table-hover">
                <VehicleHeader />
                {
                    cars.map( (car,i) => (
                        <Vehicle key={ i } car={ car } />
                    ))
                }
            </table>
        </>
    )
}
