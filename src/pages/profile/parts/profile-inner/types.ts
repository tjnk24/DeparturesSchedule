import { Dispatch, SetStateAction } from 'react';
import { FormValidationTypes } from '@apptypes/components';

export type ProfileInnerProps = {
    componentProps : {
        displayName : string;
        email       : string;
    };
};

export type updateProfileTypes = {
    username       : string;
    email          : string;
    password       : string | null;
    repeatPassword : string | null;
}


// export type UpdateUsernameTypes = (
//     formPayload    : FormValidationTypes,
//     messageHandler : Dispatch<SetStateAction<string>>,
//     editingHandler : Dispatch<SetStateAction<boolean>>,
// ) => void;

export type SubmitActionTypes = (
    formPayload     : { [key: string]: string },
    messageHandler  : Dispatch<SetStateAction<string>>,
    editingHandler  : Dispatch<SetStateAction<boolean>>,
    popoverHandler? : Dispatch<SetStateAction<boolean>>,
    popoverPayload? : { [key: string]: string },
) => void;
// export type SubmitReauthArgs = {
//     popoverHandler: Dispatch<SetStateAction<boolean>>;
//     popoverPayload: { [key: string]: string };
// }

// type TestType = {
//     param1: string;
//     param2: boolean;
// };

// type NewType = {
//     param3: number;
// };

// export type FuncType<P, U> = (param: (P & U)) => void;

// const testFunc: FuncType<TestType, NewType> = (param1, param2, param3) => {
//   console.log(param1, param2, param3);
// };

// export interface UpdateActionInterface {
//     updateUsername: UpdateUsernameTypes;
//     updateEmail: UpdateEmailTypes;
// }

// interface TestInterface {
//     testFunc(foo: string, bar: number, baz: boolean): void;
//     testFunc(foo: string, bar: number): void;
// }

// const testFunc: TestInterface = (foo: string, bar: number, baz: boolean) => {
//   console.log(foo, bar, baz);
// };
