const {Schema, Types, model} = require("mongoose");
const Joi = require("joi");

const ItemSchema = Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 2,
        },
        email: {
            type: String,
            required: true,
            minlength: 2,
        },
        message: {
            type: String,
            required: true,
            minlength: 2,
        },
    },
    {versionKey: false, timestamps: true}
);

const joiSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(2).required(),
    message: Joi.string().min(2).required(),
});

const Item = model('item', ItemSchema);

module.exports = {Item, joiSchema};