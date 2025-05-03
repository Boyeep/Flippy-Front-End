const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Flippy</div>
      <div className="nav-links">
        <a href="#Home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#all-courses">Course</a>
        <a href="#">Contact</a>
      </div>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;