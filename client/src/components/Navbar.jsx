import LeaderboardDropDown from "./LeaderboardDropdown";
import AccountDropdown from "./AccountDropdown";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  return (
    <header>
      <div className="site-header-container">
        <LeaderboardDropDown />
        <div className="site-logo-container">
          <a href="/">
            <img
              src="/assets/images/site_pics/gregs-arcade-title.png"
              alt="Homepage Logo"
            />
          </a>
        </div>
        <AccountDropdown loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
    </header>
  );
};

export default Navbar;
