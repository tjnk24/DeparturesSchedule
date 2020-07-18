import { Dispatch, SetStateAction } from 'react';
import { FormValidationTypes } from '@apptypes/components';

export type ProfileInnerProps = {
    componentProps : {
        displayName : string;
        email       : string;
    };
};

export type updateProfileTypes = {
    username       : string;
    email          : string;
    password       : string | null;
    repeatPassword : string | null;
}

export type SubmitHandlerTypes = (
    payload        : FormValidationTypes,
    messageHandler : Dispatch<SetStateAction<string>>,
    editingHandler : Dispatch<SetStateAction<boolean>>
) => void;
