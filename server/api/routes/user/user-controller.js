const logger = require("../../../util/logger");
const UserModel = require("./user-model");

exports.params = async (req, res, next, id) => {
  console.log('am i here??', id)
  try {
    const user = await UserModel.findById(id).select('-password');
    console.log(user)
    if (!user) return res.send("user with that id doesn't exist");
    req.user = user;
    next()
  } catch (error) {
    logger.log(error);
    res.send("could not find that user");
  }
};

exports.getAll = async function getAllUsers(req, res) {
  try {
    const users = await UserModel.find({}).select('-password');
    res.send(users);
  } catch (error) {
    logger.log(error);
    res.send("Oops");
  }
};

exports.getOne = (req, res) => {
  console.log('works')
  const user = req.user;
  res.send(user)
};

exports.create = async function createUser(req, res, next) {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    logger.log(error);
    res.send(error.message);
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
  } catch (error) {
    logger.log(error);
    res.send("the user could not be updated");
  }
}
