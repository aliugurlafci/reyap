import { combineReducers } from "redux";
import { ConfigReducer, ConfigListenerReducer } from './Reducers';

export const RootReducer = combineReducers({
    config: ConfigReducer,
    configListener: ConfigListenerReducer
})