import { AppPropsTypes } from '@apptypes/store';

type ConstantType = { type: string }

export type FetchPropsStartTypes = () => ConstantType

export type FetchPropsSuccessTypes = (appProps: AppPropsTypes) => ConstantType & {
  appProps: AppPropsTypes;
}

export type FetchPropsErrorTypes = (error: string) => ConstantType & {
  error: string;
}

export type FetchPropsTypes = (dispatch: React.Dispatch<ConstantType>) => Promise<void>
