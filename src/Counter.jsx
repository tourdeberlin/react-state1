import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        -1
      </button>
      <span>{counter}</span>

      <button onClick={increment} style={{ marginLeft: "10px" }}>
        +1
      </button>
    </div>
  );
};

export default Counter;
