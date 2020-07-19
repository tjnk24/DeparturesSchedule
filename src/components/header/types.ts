import { Dispatch, SetStateAction } from 'react';
import { ModalType } from '@components/modals/backdrop/types';

type HeaderProps = {
    handler: Dispatch<SetStateAction<ModalType>>;
}

export default HeaderProps;
