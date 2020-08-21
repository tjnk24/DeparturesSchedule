import { SubmitActionTypes } from '../profile-inner/types';

export type ResetFormType = (
    param: { values: string }
) => void;

export type FormBlockProps = {
    type          : string;
    disabled      : boolean;
    startValue?   : { [ key: string ]: string };
    action        : SubmitActionTypes;
    startMessage? : string;
    reauth?       : boolean;
}

export type SubmitActionType = (
    payload: { [key: string]: string },
    { resetForm }: { resetForm: ResetFormType }
) => void;
