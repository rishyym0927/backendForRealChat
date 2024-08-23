const userModel = require("../models/userModel");


const createToken = (_id) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  return token;
};





const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error finding user:", err);
    res.status(500).json({ error: "Server error, please try again" });
  }
};

const getAllUsers = async (req, res) => {
    try {
      const users = await userModel.find({});
      res.status(200).json({
        users,
        message: "All users retrieved successfully",
      });
    } catch (err) {
      console.error("Error getting all users:", err);
      res.status(500).json({ error: "Server error, please try again" });
    }
  };


module.exports = {  findUser, getAllUsers };
