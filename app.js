const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

//router
const categoriesRouter = require("./apps/api/v1/categories/router");
const imagesRouter = require("./apps/api/v1/images/router");
const talentsRouter = require("./apps/api/v1/talents/router");

const v1 = "/api/v1/cms";

const notFoundMiddleware = require("./apps/middlewares/not-found");
const handleErrorMiddlewate = require("./apps/middlewares/handle-error");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "wellcome to api semina",
  });
});

app.use(v1, categoriesRouter);
app.use(v1, imagesRouter);
app.use(v1, talentsRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddlewate);

module.exports = app;
