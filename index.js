// I would use whitespace to group this file!
const express = require("express");
const app = express();

const storyController = require("./controllers/stories");
const characterController = require("./controllers/characters");
const homeController = require("./controllers/homes");

const methodOverride = require("method-override");
const parser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(parser.urlencoded({
    extended: true
}));

app.use(methodOverride("_method"));

app.use("/character", characterController);
app.use("/story", storyController);
app.use("/", homeController);

app.listen(4000, () =>
    console.log("Running on port 4000! :D")
);
