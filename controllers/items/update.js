const {Item} = require("../../schemas");

const update = async (itemId, body) => {
  try {
    const { itemId } = req.params;
    const updateItem = await Item.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    if (!updateItem) {
      return res.status(404).json({ message: "missing fields" });
    }
    res.json({ updateItem });
  } catch (error) {
    next(error);
  }
};

module.exports = update;