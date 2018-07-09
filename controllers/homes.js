const express = require("express");
const router = express.Router();

//basic router for the index home page
// if this is just for the home page, the file should be `home` or  `pages` or something -- thought you had a homes model!
router.get("/", (req, res) => {
    res.render("index")
});

// would remove helper comments like this in production
//stays at the bottom of the file:
module.exports = router;
