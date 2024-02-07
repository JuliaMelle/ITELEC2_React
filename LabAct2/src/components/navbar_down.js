import "../styles/navdown.css";
function NavbarDown() {
  return (
    <div className="desktop-nav" id="myNavbar">
      <div class="desktop-nav-left">
        <a href="#" class="Bold_Gravity desktop-nav-left__logo">
          <img src="logo.png" class="desktop-nav-left__img" alt="logo"></img>
        </a>
      </div>
      <div className="desktop-nav-middle">
        <a
          href="#"
          className="desktop-nav-middle__link"
          style={{ borderBottom: "4px solid var(--darkgrey)" }}
        >
          Archive
        </a>
        <a href="#" className="desktop-nav-middle__link">
          About
        </a>
        <a href="#" className="desktop-nav-middle__link">
          Terms of Submission
        </a>
        <a
          href="#"
          className="desktop-nav-middle__link desktop-nav-middle_link--events"
        >
          Paskuhan ✨
        </a>
      </div>
      <div className="desktop-nav-right">
        <button className="desktop-nav-right__button desktop-nav-right__button--submit GravityRegular">
          Submit an entry
        </button>
      </div>
    </div>
  );
}
export default NavbarDown;
