function AccountDropdown() {
  return (
    <div className="nav-dropdown-container">
      <p className="dropdown-name">Account</p>
      <div className="nav-dropdown">
        <table className="dropdown-table">
          <tbody>
            <tr>
              <td>
                <a href="/account">Stats</a>
              </td>
              <td>
                <a href="/leaderboards">Log Out</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountDropdown;
