const notFound = (req, res) => {
  res.status(404).send({ msg: "ROute does not exist" });
};

module.exports = notFound;
