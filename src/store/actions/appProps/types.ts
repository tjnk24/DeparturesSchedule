import { AppPropsTypes, MixedValueTypes } from '@apptypes/components';
import { ActionType } from '@apptypes/store';

type ConstantType = { type: string }

type DispatchType = ConstantType | ActionType<MixedValueTypes>

export type FetchPropsStartTypes = () => ConstantType

export type FetchPropsSuccessTypes = (payload: AppPropsTypes) => ConstantType & {
  payload: AppPropsTypes;
}

export type FetchPropsErrorTypes = (error: string) => ConstantType & {
  payload: string;
}

export type FetchPropsTypes = (
  dispatch: React.Dispatch<DispatchType>,
  path: string
) => Promise<void>
