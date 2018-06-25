const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const Story = connection.models.story;
const Character = connection.models.character;

//basic router for stories
router.get("/", (req, res) => {
    Story.findAll()
        .then(story => {
            res.render("index", {
                story
            });
        })
        .catch(err => console.error(err));
});

// basic router for characters
// router.get("/", (req, res) => {
//     Character.findAll()
//         .then(character => {
//             res.render("index", {
//                 character
//             });
//         })
//         .catch(err => console.error(err));
// });

//possible router to get all info-currently not working
// router.get("/", (req, res) => {
//     Story.findById(req.params.id).then(story => {
//         Character.findAll({
//             where: {
//                 storyId: story.id
//             }
//         }).then(character => {
//             console.log(character, story)
//             res.render("index", {
//                 character
//             })
//         })
//     });
// });


//stays at the bottom of the file:
module.exports = router;