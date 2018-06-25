const express = require("express");
const router = express.Router();

//basic router for the index home page
router.get("/", (req, res) => {
    res.render("index")
        .catch(err => console.error(err));
});

//stays at the bottom of the file:
module.exports = router;