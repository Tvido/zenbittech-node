const {Item} = require("../../schemas");

const getById = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findById(itemId);
    if (!item) {
      res.status(404).json({ message: "Not found" });
    }

    res.json({
      item,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;