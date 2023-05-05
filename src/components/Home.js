import { useState } from "react";
import BlogList from "./BlogList";

// Parent component
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Task Maker", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Code Quiz", body: "lorem ipsum...", author: "luigi", id: 2 },
    {
      title: "Social Network",
      body: "lorem ipsum...",
      author: "bowswer",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {/* child component */}
      <BlogList blogs={blogs} title="Projects" />
    </div>
  );
};

export default Home;
