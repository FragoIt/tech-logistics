import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "jairo@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Saud",
    email: "saud@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Thiago",
    email: "yokas@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Dayanna",
    email: "usuario@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
