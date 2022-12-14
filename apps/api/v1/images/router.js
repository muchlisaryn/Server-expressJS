const express = require("express");
const router = express();
const { create } = require("./controler");

const upload = require("../../../middlewares/multer");

router.post("/images", upload.single("avatar"), create);
module.exports = router;
