import { ActionType, UpdateInputAction } from '../actions';

export default (state = '', action: UpdateInputAction) => {
  switch (action.type) {
    case ActionType.INPUT_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
