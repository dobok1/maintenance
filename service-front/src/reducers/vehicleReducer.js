import { types } from "../types/types";

const initialState = {
    openModal: false,
    vehicles:[],
    vehicle:{}
}

export const vehicleReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.getAll:
            return {
                ...state,
                vehicles: action.payload.vehicles
            }
        case types.openModal:
            return {
                ...state,
                openModal: action.payload.openModal
            }
        case types.vehicleActive:
            return {
                ...state,
                vehicle: action.payload.vehicle
            }
        default:
            return state;
    }
}