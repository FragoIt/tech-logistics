import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import Product from "./Models/ProductModel.js";
import products from "./data/Products.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

// IMPORT ALL DATA
ImportData.post(
  "/",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    await Product.deleteMany({});
    
    const importUser = await User.insertMany(users);
    const importProducts = await Product.insertMany(products);
    
    res.send({ 
      message: "Data imported successfully!",
      users: importUser.length,
      products: importProducts.length 
    });
  })
);

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

export default ImportData;
