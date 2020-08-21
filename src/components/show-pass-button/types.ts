import { SetStateAction, Dispatch } from 'react';

type ShowPassButtonProps = {
  type    : string;
  setType : Dispatch<SetStateAction<string>>;
};

export default ShowPassButtonProps;
