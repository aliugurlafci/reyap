import axios from 'axios';

export const LOAD_CONFIG_JSON = "LOAD_CONFIG_JSON";
export const CONFIG_CHANGE_OCCUR = "CONFIG_CHANGE_OCCUR";

const targetUrl = "";

export const loadConfig = () => (dispatch) => {
    axios.get(targetUrl).then((res) => {
        dispatch({
            type: LOAD_CONFIG_JSON,
            payload: res.data,
        });
    });
};
export const changeListener = () => (dispatch) => {
    axios.get(targetUrl).then((res) => {
        dispatch({
            type: CONFIG_CHANGE_OCCUR,
            payload: res.data,
        });
    });
};