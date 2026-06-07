import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

const ReducerExample = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default ReducerExample;
