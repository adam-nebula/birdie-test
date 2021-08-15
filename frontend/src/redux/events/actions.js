import types from "./types";
import { get } from "../../services/api";

export const aFetchEventTypes = () => dispatch => {
    return new Promise((resolve, reject) => {
        get("https://birdie-test-adam.azurewebsites.net/api/eventTypes").then((response) => {
            dispatch({ type: types.FETCH_EVENTS_TYPE, payload: response.data });
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export const aFetchEvents = (recipientId, eventType) => dispatch => {

    return new Promise((resolve, reject) => {
        get("https://birdie-test-adam.azurewebsites.net/api/careRecipientEvents", { recipientId, eventType }).then((response) => {
            dispatch({ type: types.FETCH_EVENTS, payload: response.data });
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        })
    })
}