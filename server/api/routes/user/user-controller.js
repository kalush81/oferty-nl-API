const logger = require("../../../util/logger");
const UserModel = require("./user-model");
const { signToken } = require("../auth/auth");

exports.params = async (req, res, next, id) => {
  try {
    const user = await UserModel.findById(id).select('-password');
    if (!user) return res.send("user with that id doesn't exist");
    req.user = user;
    next()
  } catch (err) {
    next(err);
  }
};

exports.getAll = async function getAllUsers(req, res, next) {
  try {
    const users = await UserModel.find({}).select('-password');
    res.send(users);
  } catch (err) {
    next(err);
  }
};

exports.getOne = (req, res) => {
  const user = req.user;
  res.send(user)
};

exports.create = async function createUser(req, res, next) {
  try {
    const user = new UserModel(req.body);
    await user.save();
    //res.send(user); //send token instead of entire user object !
    const token = signToken(user._id);
    res.send(token);
  } catch (err) {
    next(err)
  }
};

exports.update = async function updateUserData (req, res, next) {
  try {
    const userUpdated = await UserModel.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true }
    );
    res.send(userUpdated);
  } catch (err) {
    next(err);
  }
}
