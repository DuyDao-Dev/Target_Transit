import { combineReducers } from 'redux';
import busDirection from './busDirection.reducer';
import busRoutes from './busRoutes.reducer';
import displayStops from './displayStops.reducer';


const rootReducer = combineReducers({
    busDirection,
    busRoutes,
    displayStops,
});

export default rootReducer;
