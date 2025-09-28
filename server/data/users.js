import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Santiago Fragozo",
    email: "santiago@example.com", 
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Cliente Demo",
    email: "cliente@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Usuario Prueba",
    email: "usuario@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
