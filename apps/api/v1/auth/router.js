const express = require("express");
const router = express();
const { signInCms } = require("./controller");

router.post("/auth/signin", signInCms);

module.exports = router;
