import React, { useEffect, useState } from "react";
import axios from "axios";

const UserStatsTable = () => {
  const [username, setUsername] = useState("");

  // When component mounts, get info from token
  useEffect(() => {
    axios
      .get("http://localhost:5150/api/auth/me", { withCredentials: true })
      .then((res) => {
        setUsername(res.data.user.username);
      })
      .catch((err) => {
        console.error("Failed to fetch username:", err);
      });
  }, []);

  return (
    <div>
      <div className="user-stats-container">
        <h1>{username ? `${username}'s Stats` : "Loading..."}</h1>
        <div className="user-stats">
          <div className="user-stats-info-style">
            <h2>Account Created Date:</h2>
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default UserStatsTable;
