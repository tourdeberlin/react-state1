import { useState } from "react";

const TextToggle = () => {
  const [text, setText] = useState("Первый текст");
  function toggleText() {
    setText((prev) =>
      prev === "Первый текст" ? "Второй текст" : "Первый текст",
    );
  }
  return (
    <div>
      <button onClick={toggleText}>Поменять текст</button>
      <p>{text}</p>
    </div>
  );
};

export default TextToggle;
