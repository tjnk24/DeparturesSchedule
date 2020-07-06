import { Dispatch, SetStateAction } from 'react';

type VerifyProps = {
    modalHandler   : Dispatch<SetStateAction<string>>;
    successHandler : Dispatch<SetStateAction<boolean>>;
}

export default VerifyProps;
