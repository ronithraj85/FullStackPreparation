import { useEffect, useRef, useState } from "react";

export default function UseRefCounterExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);
  const countRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; // Update after each render
  }, [count]);

  return (
    <div>
      <h1>useRef Counter Example</h1>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => (countRef.current = countRef.current + 1)}>
        {/* {countRef.current} // onclick does not trigger re-render, so it will always show the initial value of 0, but it will increment the countRef value on each click.  */}
        Count+1
      </button>
    </div>
  );
}
