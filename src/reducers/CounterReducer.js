export const CounterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.decrementBy
      };

    case "RESET":
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};
