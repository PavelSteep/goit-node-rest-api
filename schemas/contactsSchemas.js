const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\d{10,15}$/).required(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^\d{10,15}$/),
}).or("name", "email", "phone");

module.exports = { 
  addSchema, 
  updateSchema 
};
