const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// Attach user routes to the "/users" path
router.use("/users", userRoutes);
// Attach thought routes to the "/thoughts" path
router.use("/thoughts", thoughtRoutes);

module.exports = router;
