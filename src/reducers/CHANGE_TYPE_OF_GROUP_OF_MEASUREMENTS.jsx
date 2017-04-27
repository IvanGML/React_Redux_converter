const initialState = '';

export default function dispatch(state = initialState, action) {
  if (action.type === 'CHANGE_TYPE_OF_GROUP_OF_MEASUREMENTS') {
    return action.payload;
  }
  return state;
}