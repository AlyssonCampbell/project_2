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

//new stories route:
router.get("/new", (req, res) => {
    res.render("newstory");
});

//show route for stories
router.get("/:id", (req, res) => {
    Story.findById(req.params.id).then(story =>
        res.render("showstory", {
            story
        })
    );
});

//post for story
router.post("/", (req, res) => {
    Story.create(req.body).then(() => {
        res.redirect("/story");
    });
});

//edit route
router.get("/edit/:id", (req, res) => {
    Story.findById(req.params.id).then(story => {
        res.render("editstory", {
            story
        });
    });
});

//put route for edit
router.put("/:id", (req, res) => {
    Story.findById(req.params.id).then(story => {
        return story.updateAttributes(req.body)
    }).then(story => {
        res.redirect("/story");
    });
});

//stays at the bottom of the file:
module.exports = router;