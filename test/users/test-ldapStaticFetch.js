require('leaked-handles');

var appRoot = require('app-root-path');

var supertest = require('supertest');
var app = require(appRoot + '/app.js');
var test = require(appRoot + '/test/nock-setup.js');

var request = supertest(app);

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
