import { SubmitHandlerTypes } from '../profile-inner/types';

type FormBlockProps = {
    type       : string;
    disabled   : boolean;
    startValue : { [ key: string ]: string };
    action     : SubmitHandlerTypes;
}

export default FormBlockProps;
