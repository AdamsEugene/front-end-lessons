import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [updatedValue, setUpdatedValue] = useState("");


  const increase = () => {
    setState((prev) => prev + 1);
  };

  function decrease() {
    setState(function (prev) {
      return prev - 1;
    });
  }

  const unUpdated = () => {
    setState(+updatedValue);
    setUpdatedValue("");
  };

  return (
    <div className="main_wrapper">
      <div className="wrapper">
        <h1 className="value">{state}</h1>
        <div className="buttons_wrapper">
          <button onClick={decrease}>decrease</button>
          <input
            type="number"
            name="adams"
            id="adams"
            value={updatedValue}
            onChange={(e) => setUpdatedValue(+e.target.value)}
          />
          <button onClick={increase}>increase</button>
        </div>
        <button onClick={unUpdated}>update</button>
      </div>
    </div>
  );
}

export default App;
