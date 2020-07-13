import { AuthUserTypes } from '@apptypes/components';

type ConstantType = { type: string }

export type authUserUpdateTypes = (
    user: firebase.User
) => ConstantType & {
    payload: AuthUserTypes;
}

export type authUserRemoveTypes = () => ConstantType;
