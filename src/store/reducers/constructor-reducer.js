import React, { useReducer } from "react";
import { ADD_TO_LIST } from '@store/actions/actionTypes';

const initialState = {
    departures: []
}

export const ConstructorContext = React.createContext(initialState);

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
};

export const ConstructorProvider = props => {
    const [state, dispatch] = useReducer(constructorReducer, initialState);

    return (
        <ConstructorContext.Provider value={ { state, dispatch } }>
            {props.children}
        </ConstructorContext.Provider>
    );
}
