const movieRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(/^https?:\/\/(www\.)?[\w-]+(\.[\w-]+)+(\/[\w-./?%&=]*)?$/),
    trailerLink: Joi.string().required().pattern(/^https?:\/\/(www\.)?[\w-]+(\.[\w-]+)+(\/[\w-./?%&=]*)?$/),
    thumbnail: Joi.string().required().pattern(/^https?:\/\/(www\.)?[\w-]+(\.[\w-]+)+(\/[\w-./?%&=]*)?$/),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovie);
movieRouter.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
}), deleteMovie);

module.exports = movieRouter;
