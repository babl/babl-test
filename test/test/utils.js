var path = require('path');
var fs = require('fs');
var Promise = require('bluebird');
var readdir = Promise.promisify(fs.readdir, fs);
var stat = Promise.promisify(fs.stat, fs);
var E = require('core-error-predicates');

exports.getScenarios = function() {
  var rootDir = path.resolve(__dirname, '../scenarios');
  return readdir(rootDir)
    .map(function(filename) {
      return path.resolve(rootDir, filename);
    })
    .filter(function(filepath) {
      return stat(filepath)
        .then(function(st) {
          return st.isDirectory();
        })
        .catch(E.FileAccessError, function() {
          return false;
        })
    })
};
