const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const Character = connection.models.character;

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

//new stories route:
router.get("/new", (req, res) => {
    res.render("newcharacter");
});

//show route for stories
router.get("/:id", (req, res) => {
    Character.findById(req.params.id).then(character =>
        res.render("showcharacter", {
            character
        })
    );
});

//post for story
router.post("/", (req, res) => {
    Character.create(req.body).then(() => {
        res.redirect("/character");
    });
});

//edit route
router.get("/edit/:id", (req, res) => {
    Character.findById(req.params.id).then(character => {
        res.render("editcharacter", {
            character
        });
    });
});

//put route for edit
router.put("/:id", (req, res) => {
    Character.findById(req.params.id).then(character => {
        return character.updateAttributes(req.body)
    }).then(character => {
        res.redirect("/character");
    });
});

//route for delete
router.delete("/:id", (req, res) => {
    Character.findById(req.params.id).then(character => {
        character.destroy().then(() => {
            res.redirect("/character");
        });
    });
});

//stays at the bottom of the file:
module.exports = router;