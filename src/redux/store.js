import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { RootReducer } from './reducers/RootReducer';

export default function Store() {
    let store = configureStore({ reducer: RootReducer }, applyMiddleware);
    return store;
}