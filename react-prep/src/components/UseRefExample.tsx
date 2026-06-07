import React, { useRef } from "react";

const useRefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>useRef Example</h1>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default useRefExample;
