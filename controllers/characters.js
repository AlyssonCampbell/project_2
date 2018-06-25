const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const Character = connection.models.character;
const Story = connection.models.story;

// const router = require("express").Router({ mergeParams: true });
// const { Story, Character } = require("../db/connection").models;

const queryOptions = { include: [{ model: Story }] };

//set up for GET handler:
router.get("/", (req, res) => {
    Character.findAll()
        .then(character => {
            res.render("character", {
                character
            });
        })
        .catch(err => console.error(err));
});

//new character route:
router.get("/new", (req, res) => {
    res.render("newcharacter");
});

//functional show route for character
router.get("/:id", (req, res) => {
    Character.findById(req.params.id).then(character =>
        res.render("showcharacter", {
            character
        })
    );
});

//post for character
router.post("/", (req, res) => {
    Character.create(req.body).then(() => {
        res.redirect("/character");
    });
});

//edit character
router.get("/edit/:id", (req, res) => {
    Character.findById(req.params.id).then(character => {
        res.render("editcharacter", {
            character
        });
    });
});

//put route for edit character
router.put("/:id", (req, res) => {
    Character.findById(req.params.id).then(character => {
        return character.updateAttributes(req.body)
    }).then(character => {
        res.redirect("/character");
    });
});

//route for delete character
router.delete("/:id", (req, res) => {
    Character.findById(req.params.id).then(character => {
        character.destroy().then(() => {
            res.redirect("/character");
        });
    });
});

//stays at the bottom of the file:
module.exports = router;