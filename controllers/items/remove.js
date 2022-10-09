const {Item} = require("../../schemas");

const remove = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const deleteItem = await Item.findByIdAndDelete(itemId);

    if (!deleteItem) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      deleteItem,
      message: "Item deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;