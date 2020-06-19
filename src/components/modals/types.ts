import { Dispatch, SetStateAction } from 'react';

export type ModalProps = {
    modal: string;
    modalHandler: Dispatch<SetStateAction<string>>;
}
