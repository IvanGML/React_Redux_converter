import {combineReducers} from 'redux';
import CUSTOM_VALUE_TO_STORE from './CUSTOM_VALUE_TO_STORE.jsx';
import INITIAL_VALUE_TO_STORE from './INITIAL_VALUE_TO_STORE.jsx';
import MEASUREMENTS from './MEASUREMENTS.jsx';

export default combineReducers({
    CUSTOM_VALUE_TO_STORE,
    INITIAL_VALUE_TO_STORE,
    MEASUREMENTS
})