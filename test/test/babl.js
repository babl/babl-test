var babl = require('node-babl');

module.exports = function(module, params) {
  return babl
    .module('larskluge/string-upcase', Object.assign({}, params, { endpoint: 'supervisor:4445' }))
    .then(JSON.parse);
};
