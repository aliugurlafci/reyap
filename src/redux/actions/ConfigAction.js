import axios from 'axios';

export const LOAD_CONFIG_JSON = "LOAD_CONFIG_JSON";
export const CONFIG_CHANGE_OCCUR = "CONFIG_CHANGE_OCCUR";
export const LOAD_CONFIG_END = "LOAD_CONFIG_END";
export const LANGUAGE_CHANGED = "LANGUAGE_CHANGED";

const targetUrl = "https://api.reyapgroup.com/api/config";

export const loadConfig = () => (dispatch) => {
    dispatch({
        type: LOAD_CONFIG_JSON,
        payload: {
            loading: false
        },
    });
    axios.get(targetUrl).then((res) => {
        dispatch({
            type: LOAD_CONFIG_END,
            payload: {
                config: res.data,
                loading: false
            },
        });
    });
};