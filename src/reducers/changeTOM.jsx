const initialState = [];

export default function dispatch(state = initialState, action) {
  if (action.type === 'CHANGE_TOM_TO') {
    return action.payload;
  }
  return state;
}
