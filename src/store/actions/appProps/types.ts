import { AppPropsTypes } from '@apptypes/components';

type ConstantType = { type: string }

export type FetchPropsStartTypes = () => ConstantType

export type FetchPropsSuccessTypes = (appProps: AppPropsTypes) => ConstantType & {
  payload: AppPropsTypes;
}

export type FetchPropsErrorTypes = (error: string) => ConstantType & {
  payload: string;
}

export type FetchPropsTypes = (dispatch: React.Dispatch<ConstantType>) => Promise<void>
