import React, { useReducer } from "react";
import { ADD_LIST_ITEM, UPDATE_LIST_ITEM, REMOVE_LIST_ITEM } from '@store/actions/actionTypes';

const initialState = [];

export const ConstructorContext = React.createContext(initialState);

export const constructorReducer = (state, action) => {
    switch (action.type) {
        case ADD_LIST_ITEM:
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
                    return {
                        ...item,
                        ...action.payload
                    }
                }
            })
        case REMOVE_LIST_ITEM:
            const newState = state.filter((item, index) => index !== action.payload.id);

            console.log(newState);

            return newState.map((item, index) => {
                item.id = index;
                return item;
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
