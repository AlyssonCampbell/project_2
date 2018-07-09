module.exports = function (sequelize, DataTypes) {
    return sequelize.define("character", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        alias: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER,
        // I would write out the whole field - so profession and description
        prof: DataTypes.STRING,
        desc: DataTypes.TEXT,
        background: DataTypes.TEXT,
        image: DataTypes.STRING
    });
};
