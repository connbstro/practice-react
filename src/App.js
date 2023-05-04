import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  // let name = "Connor";
  const [name, setName] = useState("Connor");
  // Array destructuring
  const [age, setAge] = useState(23);

  const handleClick = () => {
    setName("Jesse");
    setAge(26);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>
          {name} is {age} years old
        </p>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
}

export default App;
