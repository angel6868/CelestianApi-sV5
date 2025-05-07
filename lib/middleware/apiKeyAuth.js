require('dotenv').config();

module.exports = function (req, res, next) {
  const key = req.header('x-api-key') || req.query.apikey;
  const validKey = process.env.API_KEY;

  if (!key || key !== validKey) {
    return res.status(401).json({ status: false, message: 'API Key inválida' });
  }

  next();
};