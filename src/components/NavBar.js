const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="links">
        <a className="nav-bar-item" href="/">
          Info
        </a>
        <a className="nav-bar-item" href="/journeys">
          Journeys
        </a>
        <a className="nav-bar-item" href="/stations">
          Stations
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
