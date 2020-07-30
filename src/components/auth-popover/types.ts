import { StringObjectType } from '@apptypes/common';

type AuthPopoverProps = {
    target   : React.RefObject<HTMLDivElement | null>;
    show     : boolean;
    action   : (payload: StringObjectType) => void;
    disabled : boolean;
}

export default AuthPopoverProps;
