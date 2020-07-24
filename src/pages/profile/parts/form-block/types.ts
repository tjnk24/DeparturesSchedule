import { SubmitActionTypes } from '../profile-inner/types';

type FormBlockProps = {
    type          : string;
    disabled      : boolean;
    startValue?   : { [ key: string ]: string };
    action        : SubmitActionTypes;
    startMessage? : string;
    reauth?       : boolean;
}

export default FormBlockProps;
