const Categories = require("../../api/v1/categories/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllCategories = async () => {
  const result = await Categories.find();

  return result;
};

const createCategories = async (req) => {
  const { name } = req.body;

  //cari categories
  const check = await Categories.findOne({ name });

  if (check) throw new BadRequestError("Category name duplicate");

  const result = await Categories.create({ name });
  return result;
};

const getOneCategories = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Not category by id : ${id}`);
  return result;
};

const updateCategories = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  //search categories by field name and id other than those sent from params
  const check = await Categories.findOne({
    name,
    _id: { $ne: id },
  });

  if (check) throw new BadRequestError("Category name duplicate");
  const result = await Categories.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true, runValidators: true }
  );
  if (!result) throw new NotFoundError(`Not category by id : ${id}`);
  return result;
};

const deleteCategories = async (req) => {
  const { id } = req.params;

  const result = await Categories.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Not Category by id : ${id}`);

  await result.remove();

  return result;
};

module.exports = {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
};