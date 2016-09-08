var Promise = require('bluebird');
var request = require('request');
var qs = require('qs');

module.exports = function(module, params, client) {
  var stdin = params.stdin;
  var url = 'http://client_node:3000';
  delete params.stdin;

  return new Promise(function(resolve, reject) {
    request({
      url: url,
      qs: {
        module: module,
        params: params,
      },
      method: 'post',
      headers: {
        'Content-type': 'application/octet-stream',
      },
      body: stdin,
    }, function(error, response, body) {
      if (error) {
        return reject(error);
      } else {
        return resolve(Buffer.from(body, 'base64'));
      }
    })
  });
};
