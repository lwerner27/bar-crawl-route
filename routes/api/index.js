const router = require("express").Router()
const placesRoutes = require("./places");

// Routes
router.use("/places", placesRoutes);

module.exports = router;