const router = require('express').Router();

const {items} = require('../../../controllers');
const {validation, controllerWrapper} = require("../../../middlewares");
const {joiSchema} = require("../../../schemas/item")

router.get('/', controllerWrapper(items.getAll));
router.post('/', validation(joiSchema), controllerWrapper(items.add));
router.get('/:itemId', controllerWrapper(items.getById));
router.delete('/:itemId', controllerWrapper(items.remove));
router.put('/:itemId', validation(joiSchema), controllerWrapper(items.update));

module.exports = router;