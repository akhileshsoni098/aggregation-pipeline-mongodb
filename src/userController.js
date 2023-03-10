const userModel = require("./userModel");

// Fetches all Users
const users = async (req, res) => {
  try {
    const allUserDetails = await userModel.find();
    res.status(200).send({ status: false, data: allUserDetails });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

//Fetches a Single User
const one_user = async (req, res) => {
  try {
    let userID = req.body.userID;
    const singleUser = await userModel.findById(userID);
    res.status(200).send({ status: false, data: singleUser });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

// Saves user to the database
const store = async (req, res) => {
  try {
    data = req.body;
    let { name, designation, email, phone, age } = data;
    const saveUser = await userModel.create(data);
    res.status(201).send({ status: false, data: saveUser });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

// Updates user
const update = async (req, res) => {
  try {
    let userID = req.body.userID;
    let updatedData = req.body;
    let { name, designation, email, phone, age } = updatedData;

    const updateUser = await userModel.findByIdAndUpdate(userID, {
      $set: updatedData,
    });
    res.status(200).send({ status: false, data: saveUser });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

// Deletes a user
const destroy = async (req, res) => {
  try {
    let userID = req.body.userID;
    const deleteUser = await userModel.findByIdAndRemove(userID);
    res
      .status(204)
      .send({ status: false, message: "user deleted successfully" });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

// Aggregation
// applying here

const getUserData = async (req, res) => {
  try {
    const aggregatingUser = await userModel.aggregate([
      { $match: { designation: "Mechanical Engineer" } },
      { $sort: { name: 1 } },
      { $project: { _id: 0, name: 1 } },
    ]);
    res.status(200).send({ status: false, data: aggregatingUser });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

// need more practice on this .....try{

module.exports = {
  users,
  one_user,
  store,
  update,
  destroy,
  getUserData,
};
