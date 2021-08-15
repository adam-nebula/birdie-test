import types from "./types";

let initialState = {events: [], eventTypes: []};

export default (
    state = Object.assign({}, initialState),
    {type, payload}
) => {
    switch(type){

        case types.FETCH_EVENTS_TYPE: 
            return {...state, eventTypes: payload};

        case types.FETCH_EVENTS:
            return {...state, events: payload};

        default:
            return state;
    }
}

