import { useState } from "react";

const CountLog = () => {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);

  function handleClick() {
    const newCount = count + 1;

    setCount(newCount);
    setLog([...log, "Новое значение: " + newCount]);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>{log}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default CountLog;
