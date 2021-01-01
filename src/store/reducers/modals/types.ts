import { MessagePayload, ModalsActions } from '@store/actions/modals/types';

export type ModalsState = Partial<{
  route: ModalsActions['type'];
  message: MessagePayload;
  actionCode: string;
}>
