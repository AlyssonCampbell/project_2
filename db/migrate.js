const connection = require("./connection");

connection.sequelize.sync({
    force: true
}).then(() => {
    process.exit();
});