import {
    LOAD_CONFIG_JSON,
    CONFIG_CHANGE_OCCUR,
    LOAD_CONFIG_END
} from '../actions/ConfigAction';

const configState = {
    config: {},
    loading: true
}
const configChangeState = {
    changed: false
}

export const ConfigReducer = (state = configState, action) => {
    switch (action.type) {
        case LOAD_CONFIG_JSON: {
            return {
                ...state,
                loading: true,
            }
        }
        case LOAD_CONFIG_END: {
            return {
                ...state,
                loading: false,
                config: action.payload
            }
        }
        default: return { ...state }
    }
}
export const ConfigListenerReducer = (state = configChangeState, action) => {
    switch (action.type) {
        case CONFIG_CHANGE_OCCUR: {
            return {
                ...state,
                changed: action.payload,
            }
        }
        default: return { ...state }
    }
}