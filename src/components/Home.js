import { useState } from "react";
import BlogList from "./BlogList";

// Parent component
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party", body: "lorem ipsum...", author: "luigi", id: 2 },
    { title: "Web dev", body: "lorem ipsum...", author: "bowswer", id: 3 },
  ]);

  return (
    <div className="home">
      {/* child component */}
      <BlogList blogs={blogs} title= "title" />
    </div>
  );
};

export default Home;
