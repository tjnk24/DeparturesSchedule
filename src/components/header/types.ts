import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
    handler: Dispatch<SetStateAction<string>>;
}

export default HeaderProps;
