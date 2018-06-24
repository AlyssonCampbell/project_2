const connection = require("./connection");
const storyData = require("./seed_data/storyseed.json");
const characterData = require("./seed_data/characterseed.json");

connection.models.story.destroy({
        where: {}
    })
    .then(() => {
        return connection.models.story.bulkCreate(storyData).then(() => {
            connection.models.character.destroy({
                    where: {}
                })
                .then(() => {
                    return connection.models.character.bulkCreate(characterData).then(() => {
                        process.exit();
                    });
                });
        });
    });