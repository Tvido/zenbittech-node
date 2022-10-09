const {Item} = require("../../schemas");

const getAll = async (req, res, next) => {
  try {
    const items = await Item.find({});
    res.json({
      items,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;