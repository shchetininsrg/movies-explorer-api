const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут - период в миллисекундах
  max: 100, // максимальное число запросов за указанный период
  message: 'Слишком много запросов с вашего IP, попробуйте позже.',
  statusCode: 429, // статус код для слишком многих запросов
});

module.exports = limiter;
