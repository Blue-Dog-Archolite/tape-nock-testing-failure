var path = require('path');
var tape = require('tape'); // still need to require tape
var tapeNock = require('tape-nock');


// call tapeNock with tape and an options object
var test = tapeNock(tape, { //options object to be passed to nock, not required
  fixtures: path.join(__dirname, 'fixtures'), // this is the default path
  mode: 'record', // this is the default mode
  defaultTestOptions: { // optionally provide default options to nockBack for each test
    before: function () {
      tapeNock.nock.enableNetConnect('127.0.0.1');
      console.log('a preprocessing function, gets called before nock.define');
    },
    after: function () {
      console.log('a postprocessing function, gets called after nock.define');
    }
  }
});

module.exports = test;
