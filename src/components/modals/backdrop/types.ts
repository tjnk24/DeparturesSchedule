import { Dispatch, SetStateAction } from 'react';

type BackdropProps = {
    modal    : string;
    handler  : Dispatch<SetStateAction<string>>;
    children : React.ReactElement[] | React.ReactElement;
}

export default BackdropProps;
