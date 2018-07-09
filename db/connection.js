const Sequelize = require("sequelize");
const sequelize = new Sequelize("universe", "inclassuser", "Hartford1810", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
});

const story = sequelize.import("../models/Story");
const character = sequelize.import("../models/Character");

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
