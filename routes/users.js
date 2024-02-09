const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getUsers, userUpdate } = require('../controllers/users');

userRouter.get('/me', getUsers);
userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
}), userUpdate);

module.exports = userRouter;
