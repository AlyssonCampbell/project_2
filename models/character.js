module.exports = function (sequelize, DataTypes) {
    return sequelize.define("character", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        alias: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER,
        prof: DataTypes.STRING,
        desc: DataTypes.MEDIUMTEXT,
        background: DataTypes.LONGTEXT
    });
};