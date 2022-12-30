const express = require("express");
const router = express();
const { create, index, find, destroy, update } = require("./controller");

router.post("/organizer", create);

module.exports = router;
