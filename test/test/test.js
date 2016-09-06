var babl = require('./babl');
var expect = require('chai').expect;
var fs = require('fs');
var readFile = require('bluebird').promisify(fs.readFile, fs);

describe('Module', function() {
  ['string_upcase', 'string_upcase_10m'].forEach(function(filename) {
    it('Successfully processes ' + filename, function(done) {
      readFile('/data/expected/in/' + filename)
        .then(function(input) {
          return babl('larskluge/string-upcase', { stdin: input })
            .then(function(result) {
              if (result.error) {
                throw new Error(result.error);
              } else {
                var buf = Buffer.from(result.result.Stdout, 'base64');
                return readFile('/data/expected/out/' + filename)
                  .then(function(output) {
                    expect(Buffer.compare(buf, output)).to.equal(0);
                    done();
                  });
              }
            });
        }).catch(done);
    });
  });
});
