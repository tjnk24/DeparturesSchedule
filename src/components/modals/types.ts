import { Dispatch, SetStateAction } from 'react';
import { ModalType } from './backdrop/types';

type ModalProps = {
    modal?   : ModalType;
    handler? : Dispatch<SetStateAction<ModalType>>;
}

export default ModalProps;
