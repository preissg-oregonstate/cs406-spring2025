import pool from "../database/db-connector.mjs";

// Register a new user in the database
const registerUserModel = (username, email, hashedPassword) =>
  pool
    .promise()
    .query("CALL RegisterUser(?, ?, ?)", [username, email, hashedPassword]);

// Retrieve user  info from the database
const getUserInfo = async (username) => {
  const [rows] = await pool.promise().query("CALL GetUserInfo(?)", [username]);
  return rows[0];
};

export { registerUserModel, getUserInfo };
