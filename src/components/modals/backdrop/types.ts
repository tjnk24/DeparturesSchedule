import { Dispatch, SetStateAction } from 'react';

export type ModalType = {
    route    : string;
    message? : {
        title       : string;
        messageText : string;
    };
};

export type BackdropProps = {
    modal    : ModalType;
    handler  : Dispatch<SetStateAction<ModalType>>;
    children : React.ReactElement[] | React.ReactElement;
}
