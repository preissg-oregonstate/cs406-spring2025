function LeaderboardDropdown() {
  return (
    <div className="nav-dropdown-container">
      <p className="dropdown-name">Leaderboards</p>
      <div className="nav-dropdown">
        <table className="dropdown-table">
          <tbody>
            <tr>
              <td>
                <a href="/leaderboards">Pacman</a>
              </td>
              <td>
                <a href="/leaderboards">Tetris</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/leaderboards">Snake</a>
              </td>
              <td>
                <a href="/leaderboards">Set</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardDropdown;
