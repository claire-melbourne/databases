CREATE DATABASE chat;

USE chat;

CREATE TABLE users(
  ID INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(10) DEFAULT 'anonymous'
);

CREATE TABLE rooms(
  ID INT AUTO_INCREMENT PRIMARY KEY,
  room VARCHAR(10) DEFAULT 'lobby'
);

CREATE TABLE messages(
  ID INT AUTO_INCREMENT PRIMARY KEY,
  userMessage VARCHAR(300),
  username_id INT,
  room_id INT,
  FOREIGN KEY (username_id) REFERENCES users(ID),
  FOREIGN KEY (room_id) REFERENCES rooms(ID)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.
 */


-- CREATE TABLE messages(
--   ID INT AUTO_INCREMENT PRIMARY KEY,
--   userMessaage VARCHAR(300),
--   usernameFK INT,
--   -- roomFK INT,
--   FOREIGN KEY (usernameFK)
--   REFERENCES users(ID)


--   -- FOREIGN KEY (roomFK)
--   -- REFERENCES rooms(ID)
-- );