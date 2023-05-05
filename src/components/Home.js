import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Project 1", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Project 2", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Project 3",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  // Delete component
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="Title" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
