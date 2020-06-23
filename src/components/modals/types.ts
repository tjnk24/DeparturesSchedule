import { Dispatch, SetStateAction } from 'react';

export type ModalProps = {
    modal?: string;
    handler: Dispatch<SetStateAction<string>>;
}
