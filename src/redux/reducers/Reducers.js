import {
    LOAD_CONFIG_JSON,
    CONFIG_CHANGE_OCCUR,
    LOAD_CONFIG_END,
    LANGUAGE_CHANGED
} from '../actions/ConfigAction';

const configState = {
    config: {},
    loading: true
}
const configChangeState = {
    changed: false
}
const languageChangeState = {
    language: 'tr'
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
export const LanguageListenerReducer = (state = languageChangeState, action) => {
    switch (action.type) {
        case LANGUAGE_CHANGED: {
            return {
                ...state,
                language: action.payload,
            }
        }
        default: return { ...state }
    }
}