const User = require("../../api/v1/users/model");
const { BadRequestError, UnaunthenticatedError } = require("../../errors");
const { createJWT } = require("../../utils/jwt");
const createTokenUser = require("../../utils/createaTokenUser");

const signIn = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const result = await User.findOne({ email: email });

  if (!result) {
    throw new UnaunthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await result.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnaunthenticatedError("Invalid Credentials");
  }

  const token = createJWT({ payload: createTokenUser(result) });

  return token;
};

module.exports = { signIn };
