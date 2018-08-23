var path = require('path');
var tape = require('tape'); // still need to require tape
var tapeNock = require('tape-nock');


// call tapeNock with tape and an options object
var test = tapeNock(tape, { //options object to be passed to nock, not required
  fixtures: path.join(__dirname, 'fixtures'), // this is the default path
  mode: 'record', // this is the default mode
  defaultTestOptions: { // optionally provide default options to nockBack for each test
    before: function () {
      // allow connections to 127.0.0.1 even when NOCK_BACK_MODE=lockdown
      console.log('Before function Fire');
      tapeNock.nock.enableNetConnect('127.0.0.1');
      console.log('Nock is enabled: ' + tapeNock.nock.isActive());
    },
    after: function () {
      console.log('After Function Fire');
      console.log('Nock is Enabled: ', tapeNock.nock.isActive());
    }
  }
});

module.exports = test;
