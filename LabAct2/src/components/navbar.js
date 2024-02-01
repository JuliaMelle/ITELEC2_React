import "../styles/navbar.css";
function Navbar() {
  return (
    <div className="App">
      <div className="top-nav" id="myTopnav">
        <a href="/archive" className="general" id="general">
          General
        </a>
        <a href="" className="friendship" id="friendship">
          Friendship
        </a>
        <a href="" className="love" id="love">
          Love
        </a>
        <a href="" className="sentimental" id="sentimental">
          Sentimental
        </a>
        <a href="" className="misc" id="misc">
          Misc.
        </a>
      </div>
    </div>
  );
}

export default Navbar;
