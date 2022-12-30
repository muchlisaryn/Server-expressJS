const CustomAPIError = require("./custom-api-error");
const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");
const Unauthorized = require("./unauthorized");
const UnaunthenticatedError = require("./unaunthenticated");

module.exports = {
  CustomAPIError,
  BadRequestError,
  NotFoundError,
  Unauthorized,
  UnaunthenticatedError,
};
