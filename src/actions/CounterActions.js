// Action Generators

export const Increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

export const Decrement = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

export const Reset = () => ({
  type: "RESET"
});
