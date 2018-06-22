module.exports = function (sequelize, DataTypes) {
    return sequelize.define("story", {
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        setting: DataTypes.STRING,
        year: DataTypes.INTEGER
    });
};