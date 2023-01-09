import { LOAD_CONFIG_JSON, CONFIG_CHANGE_OCCUR } from '../actions/ConfigAction';

const configState = {
    config: {}
}
const configChangeState = {
    changed: false
}

export const ConfigReducer = (state = configState, action) => {
    switch (action.type) {
        case LOAD_CONFIG_JSON: {
            return {
                ...state,
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