import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { vehicleReducer } from '../reducers/vehicleReducer';
 
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    vehicle:vehicleReducer
})

export const store = createStore (
    reducers,
    composeEnhancers(
        applyMiddleware(thunk),
    )
)