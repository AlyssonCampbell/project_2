const express = require("express");
const app = express();
const storyController = require("./controllers/story");
// const characterController = require("./controllers/character");
// const homeController = require("./controllers/home");
const methodOverride = require("method-override");
const parser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(parser.urlencoded({
    extended: true
}));
app.use(methodOverride("_method"));
// app.use("/character", characterController);
app.use("/", storyController);
// app.use("/", homeController);
app.set("view engine", "ejs");

app.listen(4000, () =>
    console.log("Running on port 4000! :D")
);