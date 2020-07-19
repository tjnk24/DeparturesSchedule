import { Dispatch, SetStateAction } from 'react';
import { ModalType } from '@components/modals/backdrop/types';

type VerifyProps = {
    modalHandler   : Dispatch<SetStateAction<ModalType>>;
}

export default VerifyProps;
