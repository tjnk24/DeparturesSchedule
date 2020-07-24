import { Dispatch, SetStateAction } from 'react';

export type ProfileInnerProps = {
    componentProps: {
        setEmailChanged : Dispatch<SetStateAction<boolean>>;
        user: {
            displayName : string;
            email       : string;
        };
    };
};

export type updateProfileTypes = {
    username       : string;
    email          : string;
    password       : string | null;
    repeatPassword : string | null;
}

export type SubmitActionTypes = (
    formPayload       : { [key: string]: string },
    messageHandler    : Dispatch<SetStateAction<string>>,
    editingHandler    : Dispatch<SetStateAction<boolean>>,
    popoverHandler?   : Dispatch<SetStateAction<boolean>>,
    popoverPayload?   : { [key: string]: string },
    resetFormHandler? : ((param: { values: string }) => void) | null,
) => void;
