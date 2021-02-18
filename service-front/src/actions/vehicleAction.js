import axios from 'axios';
import { types } from '../types/types';

export const getAllVehicles = async () => {

    const url = `${process.env.REACT_APP_API_URL}/vehicle/all`;
    const request = {
        url: url,
        method: 'GET',
    }

    const { data } = await axios( request );
    return data.data;
}

export const updateVehicleById = ( id ) => {
    return async ( dispatch ) => {

        const url = `${process.env.REACT_APP_API_URL}/vehicle/${id}`;
        const request = {
            url: url,
            method: 'PUT',
            data:{    
                "status":"maintenance",
                "estimatedate": "2021/02/27"
            }
        }

        const { data } = await axios( request );
        return data.data;
    }
}

export const handleModal = ( showHideModal ) => ({
    type: types.openModal,
    payload:{
        showHideModal
    }
})

export const vehicleSelected = ( vehicle ) => ({
    type: types.vehicleActive,
    payload:{
        vehicle
    }
})