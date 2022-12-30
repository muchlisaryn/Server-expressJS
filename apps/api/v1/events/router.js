const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controler");

router.get("/events", index);
router.get("/events/:id", find);
router.put("/events/:id", update);
router.delete("/events/:id", destroy);
router.post("/events", create);

module.exports = router;
