import React, { useReducer } from "react";
import { ADD_TO_LIST, UPDATE_LIST_ITEM } from '@store/actions/actionTypes';

const initialState = [];

export const ConstructorContext = React.createContext(initialState);

export const constructorReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return [
                ...state,
                {
                    ...action.payload,
                    id: state.length
                }
            ];
        case UPDATE_LIST_ITEM:
            return state.map((item, index) => {
                if (index !== action.payload.id) {
                    return item;
                } else {
                    return { ...action.payload }
                }
            })
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
