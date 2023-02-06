import * as dotenv from "dotenv";
dotenv.config();

const users = [
  {
    id: process.env.USERNAME,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    fullname: process.env.FULLNAME,
  },
];

export const getUser = (username, password) => {
  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  return user;
};
