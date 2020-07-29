import { AuthUserTypes } from '@apptypes/components';

type ConstantType = { type: string }

export type authUserUpdateTypes = (
    user: firebase.User | null
) => ConstantType & {
    payload: AuthUserTypes;
}
