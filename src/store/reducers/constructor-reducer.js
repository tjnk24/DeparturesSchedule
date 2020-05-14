import React, { useReducer } from "react";
import { ADD_LIST_ITEM, UPDATE_LIST_ITEM, REMOVE_LIST_ITEM } from '@store/actions/actionTypes';

let schedule = [];

export const constructorReducer = (state, action) => {
    switch (action.type) {
        case ADD_LIST_ITEM:
            schedule = [
                ...state,
                {
                    ...action.payload,
                    id: state.length
                }
            ];

            localStorage.setItem('schedule', JSON.stringify(schedule));

            return schedule;

        case UPDATE_LIST_ITEM:
            schedule = state.map((item, index) => {
                if (index !== action.payload.id) {
                    return item;
                } else {
                    return {
                        ...item,
                        ...action.payload
                    }
                }
            });
            localStorage.setItem('schedule', JSON.stringify(schedule));

            return schedule;

        case REMOVE_LIST_ITEM:
            schedule = state.filter(
                (item, index) => index !== action.payload.id
            ).map((item, index) => {
                item.id = index;
                return item;
            });

            localStorage.setItem('schedule', JSON.stringify(schedule));

            return schedule;
        default:
            return state;
    }
};



const localState = JSON.parse(localStorage.getItem('schedule'));

export const ConstructorContext = React.createContext();

export const ConstructorProvider = props => {
    const [state, dispatch] = useReducer(constructorReducer, localState || schedule);

    return (
        <ConstructorContext.Provider value={ { state, dispatch } }>
            {props.children}
        </ConstructorContext.Provider>
    );
}
