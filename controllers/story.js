const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const Story = connection.models.story;

//set up for GET handler:
router.get("/story", (req, res) => {
    story.findAll(), then(story => {
        res.render("story", {
            story
        });
    }).catch(err => console.error(err));
});





//stays at the bottom of the file:
module.exports = router;