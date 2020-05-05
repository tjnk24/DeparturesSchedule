import React from "react";
export const ConstructorContext = React.createContext();

export const initialState = {
    country: 'Belgium',
    gate: 'C1',
    hours: '00',
    minutes: '00'
}

export const constructorReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}