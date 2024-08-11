const router = require("express").Router();
const apiRoutes = require("./api");

// Attach API routes under the "/api" path
router.use("/api", apiRoutes);

// Handle unmatched routes with a 404 error
router.use((_req, res) => res.status(404).json({ error: "Route not found!" }));

module.exports = router;
