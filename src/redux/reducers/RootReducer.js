import { combineReducers } from "redux";
import { ConfigReducer, ConfigListenerReducer, LanguageListenerReducer } from './Reducers';

export const RootReducer = combineReducers({
    config: ConfigReducer,
    configListener: ConfigListenerReducer,
    languageListener: LanguageListenerReducer
})