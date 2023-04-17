const Joi = require("joi");

// Validates sent data for POST & PUT methods
const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = { addSchema };
