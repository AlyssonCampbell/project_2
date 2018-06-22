const Sequelize = require("sequelize");
const sequelize = new Sequelize("wiki", "inclassuser", "Hartford1810", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
});

const story = sequelize.import("../models/story");
const character = sequelize.import("../models/character");

character.belongsTo(story);
story.hasMany(character, {
    constraints: false
});

sequelize.authenticate().then(() => {
    console.log("connected! :D");
});

module.exports = {
    Sequelize,
    sequelize,
    models: {
        story,
        character
    }
};