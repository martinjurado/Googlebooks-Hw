const path = require("path");
const router = require("express").Router();
const bookRouter = require("./books");
const googleRouter = require("./google");

router.use("/books", bookRouter);

router.use("/google", googleRouter);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
