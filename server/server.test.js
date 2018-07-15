const request = require('supertest');

var app = require('./server').app;

it ('should return hello world response', (doneVar) => {
    request(app)
        .get('/')
        .expect('Hello World')
        .end(doneVar);
});