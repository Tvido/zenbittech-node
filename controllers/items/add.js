const {Item} = require("../../schemas");

const add = async (req, res, next) => {
  try {
    const result = await Item.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = add;