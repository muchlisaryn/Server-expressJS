const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api-error");

class UnaunthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnaunthenticatedError;
