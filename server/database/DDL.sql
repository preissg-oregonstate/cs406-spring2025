-- -----------------------------------------------------
-- Disable foreign key checks to prevent constraint errors during inserts
-- -----------------------------------------------------
SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT=0;

-- -----------------------------------------------------
-- Drop Existing Tables if They Exist (to prevent conflicts)
-- -----------------------------------------------------
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS game_data;

-- -----------------------------------------------------
-- Create Table: users
-- -----------------------------------------------------

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Stored Procedure: RegisterUser
-- -----------------------------------------------------

DROP PROCEDURE IF EXISTS RegisterUser;
DELIMITER //

CREATE PROCEDURE RegisterUser(
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password_hash VARCHAR(255)
)
BEGIN
    INSERT INTO users (username, email, password_hash)
    VALUES (p_username, p_email, p_password_hash);
END //

DELIMITER ; 

-- -----------------------------------------------------
-- Stored Procedure: GetUserInfo
-- -----------------------------------------------------

DROP PROCEDURE IF EXISTS GetUserInfo;
DELIMITER //

CREATE PROCEDURE GetUserInfo (IN p_username VARCHAR(50))
BEGIN
    SELECT
        users.id,
        users.username,
        users.password_hash
    FROM users
    WHERE users.username = p_username;
END //

DELIMITER ;

-- -----------------------------------------------------
-- Create Table: game_data
-- -----------------------------------------------------

CREATE TABLE game_data (
    user_id INT NOT NULL,
    game_name VARCHAR(50) NOT NULL,
    play_count INT DEFAULT 0,
    high_score INT DEFAULT NULL,
    high_score_date DATE DEFAULT NULL,  
    PRIMARY KEY (user_id, game_name),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Re-enable foreign key checks and commit changes
-- -----------------------------------------------------
SET FOREIGN_KEY_CHECKS=1;
COMMIT;