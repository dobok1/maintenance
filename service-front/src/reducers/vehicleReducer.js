import { types } from "../types/types";

const initialState = {
    openModal: false,
    vehicle:{}
}

export const vehicleReducer = ( state = initialState, action ) => {
    switch (action.type) {
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