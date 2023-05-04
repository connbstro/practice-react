import { useState } from "react";

const Home = () => {
  // let name = "Connor";
  const [name, setName] = useState("Connor");
  // Array destructuring
  const [age, setAge] = useState(23);

  const handleClick = () => {
    setName("Jesse");
    setAge(26);
  };

  return (
    <div className="home">
      <h2>Home</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
