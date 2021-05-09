const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
    res.send("ok")
})

module.exports = userRouter
