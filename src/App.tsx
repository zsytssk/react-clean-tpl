import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </div>
  );
}

export default App;
