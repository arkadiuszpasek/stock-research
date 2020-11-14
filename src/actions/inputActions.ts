import { ActionType } from './';

export const updateInput = (input: string): UpdateInputAction => ({
  type: ActionType.INPUT_CHANGE,
  payload: input,
});

export interface UpdateInputAction { type: ActionType.INPUT_CHANGE, payload: string };