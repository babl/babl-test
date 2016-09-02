var babl = require('./babl');
var expect = require('chai').expect;

describe('Module', function() {
  it('succeeds', function(done) {
    babl('larskluge/string-upcase', { stdin: 'lorem ipsum' })
      .then(function(result) {
        var text = new Buffer(result.result.Stdout, 'base64').toString();
        expect(text).to.equal('LOREM IPSUM');
        done();
      })
      .catch(done);
  });
})
