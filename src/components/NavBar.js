import bicycle from '../images/bicycle.svg';
const NavBar = () => {
  return (
    <nav className="nav_bar">
      <div className="links">
        {/* <img className="bike" src={bicycle} alt="bicycle" /> */}
        <a className="nav-bar-item" href="/">
          welcome
        </a>
        <a className="nav-bar-item" href="/journeys">
          journeys
        </a>
        <a className="nav-bar-item" href="/stations">
          stations
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
