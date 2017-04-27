const initialState = ['','g','g'];

export default function dispatch(state = initialState, action) {
  if (action.type === 'CREATE_CALC_ARRAY') {
    return action.payload;
  }
  return state;
}