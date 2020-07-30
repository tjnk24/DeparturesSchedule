import { AuthUserTypes } from '@apptypes/store';

type ConstantType = { type: string }

export type authUserUpdateTypes = (
    user: firebase.User | null
) => ConstantType & {
    payload: AuthUserTypes;
}
