import { Dispatch, SetStateAction } from 'react';

type ModalProps = {
    modal?  : string;
    handler? : Dispatch<SetStateAction<string>>;
}

export default ModalProps;
