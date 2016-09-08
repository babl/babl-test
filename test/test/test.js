var babl = require('./babl');
var expect = require('chai').expect;
var fs = require('fs');
var readFile = require('bluebird').promisify(fs.readFile, fs);
var utils = require('./utils');
var path = require('path');

utils.getScenarios().then(function(dirs) {
  dirs.forEach(function(dir) {
    var config = require(path.resolve(dir, 'config.json'));
    var inputPath = path.resolve(dir, 'in');
    var outputPath = path.resolve(dir, 'out');
    var cb = function(client) {
      return function(done) {
        readFile(inputPath)
          .then(function(input) {
            var params = Object.assign({}, config.params || {}, { stdin: input });
            return babl(config.module, params, client)
              .then(function(result) {
                return readFile(outputPath)
                  .then(function(output) {
                    expect(result.length).to.equal(output.length);
                    expect(Buffer.compare(result, output)).to.equal(0);
                    done();
                  });
              });
            }).catch(done);
      };
    };

    (process.env.CLIENT || '').split(/[,\s]+/).forEach(function(client) {
      describe('Scenario (' + client + '): ' + (config.description || dir), function() {
        it('gives expected results', (!config.pending && cb(client)) || null);
      });
    });
  });

  run();
});
