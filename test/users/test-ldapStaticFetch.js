require('leaked-handles');

var appRoot = require('app-root-path');

var supertest = require('supertest');
var tape = require('tape');
var tapeNock = require('tape-nock');
var app = require(appRoot + '/app.js');
var nockTest = require(appRoot + '/test/nock-setup.js');

var request = supertest(app);

var nock = tapeNock.nock;

var opts = {
  // after recording the fixtures, remove any scopes that hit 127.0.0.1
  // this is not necessary with our before function below, but it makes it a bit cleaner.
  afterRecord: function (scopes) {
    var localhost = /http:\/\/127\.0\.0\.1.*/;
    scopes = scopes.filter(function (s) {
      return !localhost.test(s.scope);
    });

    return scopes;
  },
  before: function () {
    // allow connections to 127.0.0.1 even when NOCK_BACK_MODE=lockdown
    console.log('Before function Fire');
    nock.enableNetConnect('127.0.0.1');
    console.log('Nock is enabled: ' + nock.isActive());
  },
  after: function () {
    console.log('After Function Fire');
    console.log('Nock is Enabled: ', nock.isActive());
  }

};


// call tapeNock with tape and an options object
var test = tapeNock(tape, { defaultTestOptions: opts });

test('users static responses', function(t) {
  request.get('/users/')
    .expect(200)
    .end(function(err, res){
      t.error(err, 'should not error on call');
      t.deepEqual(res.body,
        {
          user: 'Bill Clinton',
          org: 'TechOps',
          role: 'Admin',
          uid: 'crodriguez',
        });

      t.end();
    });
});
