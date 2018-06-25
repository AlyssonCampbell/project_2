const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const Story = connection.models.story;

//set up for GET handler:
router.get("/", (req, res) => {
    Story.findAll()
        .then(story => {
            res.render("story", {
                story
            });
        })
        .catch(err => console.error(err));
});

//show route for stories
router.get("/:id", (req, res) => {
    Story.findById(req.params.id).then(story =>
        res.render("showstory", {
            story
        })
    );
});

//stays at the bottom of the file:
module.exports = router;