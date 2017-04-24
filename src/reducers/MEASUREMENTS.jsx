const initialState = ['g','kg','t'];

export default function dispatch(state = initialState, action) {
  if (action.type === 'MEASUREMENTS') {
    return action.payload;
  }
  return state;
}