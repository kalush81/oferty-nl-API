const router = require("express").Router();

router.use("/rentals", require("./routes/rental/rental-routes"));
router.use("/services", require("./routes/service/service-routes"));
router.use("/users", (req, res, next)=> {console.log('/users get'); next()}, require("./routes/user/user-routes"));

router.use((req, res) => {
  res.send("this url doesn't exist");
});

module.exports = router;
