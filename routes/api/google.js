const router = require("express").Router();
const googleController = require("../../controller/google");

// matches with /api/google
router.route("/").get(googleController.findAll);

module.exports = router;
