import axios from "axios";

export const get = (endpoint, queryParams) => {
    return new Promise((resolve, reject) => {
        axios.get(endpoint, { params: queryParams}).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        })
    })
}