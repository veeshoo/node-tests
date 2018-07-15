const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server Tests', () => {
    describe('Home URL tests', () => {
        it ('should return hello world response', (doneVar) => {
            request(app)
                .get('/')
                .expect('Hello World')
                .end(doneVar);
        });
    });

    describe('User URL tests', () => {

        it ('should return the user Vishal', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({name: "Vishal", age: 41});
                })
                .end(done);
        })
    });
    

});
