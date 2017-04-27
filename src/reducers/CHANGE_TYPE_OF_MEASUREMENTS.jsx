const initialState = 'Weight';

export default function dispatch(state = initialState, action) {
  if (action.type === 'CHANGE_TYPE_OF_MEASUREMENTS') {
    return action.payload;
  }
  return state;
}