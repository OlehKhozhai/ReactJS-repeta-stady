export default function entityReducer(state = {}, { payload }) {
  if (payload && payload.entities) {
    const newState = { ...state };
    Object.keys(payload.entities).forEach(entetyKey => {
      newState[entetyKey] = { ...state[entetyKey], ...payload.entities[entetyKey] };
    });
    return newState;
  }
  return state;
}
