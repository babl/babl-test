var babl = require('node-babl');

module.exports = function(module, params) {
  return babl
    .module(module, params)
    .then(JSON.parse);
};
