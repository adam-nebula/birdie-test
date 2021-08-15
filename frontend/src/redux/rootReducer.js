import { combineReducers } from "redux";
import eventsReducer from './events/reducer.js';

const rootReducer = combineReducers({
    events: eventsReducer
});

export default rootReducer;