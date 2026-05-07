import { useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);

  function handlerClick() {
    setTimeout(() => setCounter(c => c + 1), 3000);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handlerClick}>+1</button>
    </div>
  );
};

export default Button;
