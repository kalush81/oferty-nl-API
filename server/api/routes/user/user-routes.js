const userRouter = require("express").Router();
const UserModel = require("./user-model");
const logger = require("../../../util/logger");

userRouter.get("/", (req, res) => {
  res.send("ok");
});

userRouter.post("/", async (req, res, next) => {
  try {
    const user = await new UserModel(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    logger.log(error);
    res.send(error.message);
  }
});

module.exports = userRouter;
