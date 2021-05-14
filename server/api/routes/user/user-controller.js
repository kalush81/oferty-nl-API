const logger = require("../../../util/logger");
const UserModel = require("./user-model");

exports.params = async (req, res, next, id) => {
    try {
        const user = await UserModel.findById(id);
        if (!user) return res.send('user with that id doesn\'t exist')
        req.user = user
    } catch (error) {
        logger.log(error)
        res.send('could not find that user')
    }
}

exports.getOne = async (req, res) => {
  res.send("ok");
};

exports.post = async function createUser(req, res, next) {
  try {
    const user = await new UserModel(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    logger.log(error);
    res.send(error.message);
  }
};
