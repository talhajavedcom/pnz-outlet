import { comparePassword, hashPassword } from "./../helpers/authhelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //Validation
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is Required" });
    }
    if (!address) {
      return res.send({ message: "Addres is Required" });
    }

    // Check user
    const existingUser = await userModel.findOne({ email });
    // if Existing User
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: " Already a User Please login",
      });
    }
    // Register User

    const hashedPassword = await hashPassword(password);
    //Save user Data

    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Succsfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Va;idation
    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: "Invalid email or Password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Email is not Registered",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // token
    // const token = await Jwt.sign({ _id:user._id }, process.env.JWT_SECRET, {
    //     expirresIn: "7d",
    // });

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login Sucseccfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
        image: user.image
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};
// testController

export const  testController = (re,res)=>
{
    res.send("protetced route")
}



