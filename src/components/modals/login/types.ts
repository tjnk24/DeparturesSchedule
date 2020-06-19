import { SetStateAction, Dispatch } from 'react';

export type LoginProps = {
    modal: string;
    handler: Dispatch<SetStateAction<string>>;
}
