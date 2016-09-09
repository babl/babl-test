var Promise = require('bluebird');
var request = require('request');
var qs = require('qs');

function clientUrl(type) {
  switch (type) {
    case 'node':
    case 'ruby':
    case 'cli':
      return 'http://client_' + type + ':3000';
    default:
      throw new Error('Client "' + type + '" unknown.');
  }
}

module.exports = function(module, params, client) {
  var stdin = params.stdin;
  var url = clientUrl(client);
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
