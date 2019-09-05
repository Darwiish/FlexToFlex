const router = require("express").Router();
const userRoutes = require("./userRoutes");
const accounts = require("./accounts");
const items = require("./items");

router.use("/users", userRoutes);
router.use("/accounts", accounts);
router.use("/items", items);



module.exports = router;
