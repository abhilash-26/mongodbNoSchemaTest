const express = require("express");
const router = express.Router();

const { saveData } = require("../controllers/dataController");

router.post("/save", saveData);

module.exports = router;
