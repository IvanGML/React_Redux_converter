const initialState = [];

export default function dispatch(state = initialState, action) {
  if (action.type === 'INITIAL_VALUE_TO_STORE') {
    return action.payload;
  }
  return state;
}
