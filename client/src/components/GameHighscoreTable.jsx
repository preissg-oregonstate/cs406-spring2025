import React from "react";

const GameHighscoreTable = () => {
  return (
    <div>
      <h1 className="highscore-table-title">Pacman</h1>
      <table className="highscore-table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Ranking</th>
            <th style={{ width: "30%" }}>Username</th>
            <th style={{ width: "30%" }}>Score</th>
            <th style={{ width: "15%" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>EchoFalcon9</td>
            <td>689</td>
            <td>3/22/25</td>
          </tr>
          <tr>
            <td>2</td>
            <td>FrostByte_77</td>
            <td>667</td>
            <td>3/20/25</td>
          </tr>
          <tr>
            <td>3</td>
            <td>TurboTofuX</td>
            <td>646</td>
            <td>3/18/25</td>
          </tr>
          <tr>
            <td>4</td>
            <td>ZestyZebra_13</td>
            <td>626</td>
            <td>3/14/25</td>
          </tr>
          <tr>
            <td>5</td>
            <td>LunarTacoX</td>
            <td>607</td>
            <td>3/12/25</td>
          </tr>
          <tr>
            <td>6</td>
            <td>SneakyMango</td>
            <td>589</td>
            <td>3/10/25</td>
          </tr>
          <tr>
            <td>7</td>
            <td>QuantumWaffle</td>
            <td>572</td>
            <td>3/06/25</td>
          </tr>
          <tr>
            <td>8</td>
            <td>ChillNova22</td>
            <td>556</td>
            <td>3/04/25</td>
          </tr>
          <tr>
            <td>9</td>
            <td>PixelNomad42</td>
            <td>540</td>
            <td>3/01/25</td>
          </tr>
          <tr>
            <td>10</td>
            <td>DogLuver25</td>
            <td>525</td>
            <td>2/23/25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameHighscoreTable;
