import "./App.css";
import Counter from "./Counter";
import TextToggle from "./TextToggle";
import ColorSwitcher from "./ColorSwitcher";
import Button from "./Button";
import CountLog from "./CountLog";

function App() {
  return (
    <div className="app">
      <Counter />
      <TextToggle />
      <ColorSwitcher />
      <Button />
      <CountLog />
    </div>
  );
}

export default App;
