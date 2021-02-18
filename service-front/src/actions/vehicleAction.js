import axios from 'axios';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const getAllVehicles = () => {
    return async ( dispatch ) => {
    const url = `${process.env.REACT_APP_API_URL}/vehicle/all`;
    const request = {
        url: url,
        method: 'GET',
    }

    const { data } = await axios( request );

        dispatch(getAll(data.data));
    }
}

export const updateVehicleById = ( id, formValues ) => {
    return async ( dispatch ) => {
        const { estimatedate, name } = formValues;
        const url = `${process.env.REACT_APP_API_URL}/vehicle/${id}`;
        const request = {
            url: url,
            method: 'PUT',
            data:{    
                "status":"maintenance",
                name,
                estimatedate
            }
        }

        const { data } = await axios( request );
        dispatch(getAllVehicles());
        
        Swal.fire('Aviso','Actualización exitosa','success');
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

export const getAll = ( vehicles ) => ({
    type: types.getAll,
    payload:{
        vehicles
    }
})