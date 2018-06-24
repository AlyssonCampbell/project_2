const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const Character = connection.models.character;

//stays at the bottom of the file:
module.exports = router;