import React from "react";

const UserStatsTable = () => {
  return (
    <div>
      <div className="user-stats-container">
        <h1>GameGuru12 Stats</h1>
        <div className="user-stats">
          <div className="user-stats-info-style">
            <h2>Account Age:</h2>
            <h2>25 days</h2>
          </div>
          <div className="user-stats-info-style">
            <h2>Favorite Game:</h2>
            <h2>Pacman</h2>
          </div>
        </div>
        <table className="user-stats-game-table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Game</th>
              <th style={{ width: "30%" }}>Times Played</th>
              <th style={{ width: "30%" }}>Highscore</th>
              <th style={{ width: "15%" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pacman</td>
              <td>15</td>
              <td>520</td>
              <td>3/22/25</td>
            </tr>
            <tr>
              <td>Set</td>
              <td>25</td>
              <td>98</td>
              <td>3/25/25</td>
            </tr>
            <tr>
              <td>Snake</td>
              <td>25</td>
              <td>98</td>
              <td>3/25/25</td>
            </tr>
            <tr>
              <td>Tetris</td>
              <td>25</td>
              <td>98</td>
              <td>3/25/25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserStatsTable;
