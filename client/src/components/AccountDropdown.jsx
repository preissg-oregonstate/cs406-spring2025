import axios from "axios";

function AccountDropdown({ loggedIn, setLoggedIn }) {
  const handleLogout = () => {
    axios
      .post("http://localhost:5150/api/auth/logout", null, {
        withCredentials: true,
      })
      .then(() => {
        setLoggedIn(false);
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <div className="nav-dropdown-container">
      <p className="dropdown-name">Account</p>
      <div className="nav-dropdown">
        <table className="dropdown-table">
          <tbody>
            <tr>
              <td>
                <a href={loggedIn ? "/account" : "/register"}>
                  {loggedIn ? "Stats" : "Register"}
                </a>
              </td>
              <td>
                {loggedIn ? (
                  <button onClick={handleLogout} className="logout-button">
                    Log Out
                  </button>
                ) : (
                  <a href="/login">Log In</a>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountDropdown;
