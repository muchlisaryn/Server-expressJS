const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api-error");

class BadRequest extends CustomAPIError {
  constructor(messege) {
    super(messege);
    //memeberikan statusCOde not found
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
module.exports = BadRequest;
