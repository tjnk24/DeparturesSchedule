import React from "react";
import { ADD_TO_LIST } from '../actions/actionTypes';

export const ConstructorContext = React.createContext();

export const initialState = {
    departures: []
    // country: 'Belgium',
    // gate: 'C1',
    // hours: '00',
    // minutes: '00'
}

export const departures = [];

export const constructorReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return {
                ...state,
                departures: [...state.departures, action.payload]
            };
        default:
            return state;
    }
}