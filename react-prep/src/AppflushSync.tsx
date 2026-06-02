import React, { useState } from "react";
import { flushSync } from "react-dom";

function AppflushSync() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Step 1:
    // Logs current state
    console.log("Before flushSync:", count);

    // Step 2:
    // Force React to update immediately
    flushSync(() => {
      // React processes this instantly
      setCount(count + 1);
      setCount(count + 1);
    });

    // Step 3:
    // DOM already updated here
    console.log("After flushSync:", count);
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default AppflushSync;
