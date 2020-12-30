import { FETCH_APP_PROPS_START } from '../constants';
import { FetchPropsStart } from './types';

const getProps = (path: string): FetchPropsStart => ({
  type: FETCH_APP_PROPS_START,
  payload: {
    path,
  },
});

export default getProps;
