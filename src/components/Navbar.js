const Navbar = () => {
  return (
    <div className="navbar">
      <h1>React Portfolio</h1>
      <div className="links">
        <a href="/">Home </a>
        {/* style={{ color: "white", backgroundColor: "#f1356d", borderRadius: "8px" }} */}
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Navbar;
