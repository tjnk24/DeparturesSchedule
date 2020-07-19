import { FormValidationTypes } from '@apptypes/components';

type AuthPopoverProps = {
    target   : React.RefObject<HTMLDivElement | null>;
    show     : boolean;
    action   : (payload: FormValidationTypes) => void;
    disabled : boolean;
}

export default AuthPopoverProps;
