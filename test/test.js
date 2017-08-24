'use strict';

var expect = require('chai').expect;
var Response = require('../index');

let assertCallback = (expectedErr, expectedStatusCode, expectedBody) => {
    return (error, success) => {
        expect(error).to.be.equal(expectedErr);
        expect(success.statusCode).to.be.equal(expectedStatusCode);
        expect(success.body).to.be.equal(JSON.stringify(expectedBody));
    }
}

describe('#Response', function() {
    it('should call a function passing statusCode 100 and body "message" as argument', function() {
        let body = 'message';
        var result = Response.continue().body(body).build(assertCallback(null, 100, body));
    });
    
    it('should call a function passing statusCode 200 and body "message" as argument', function() {
        let body = 'message';
        var result = Response.ok().body(body).build(assertCallback(null, 200, body));
    });
  
    it('should call a function passing statusCode 200 and body JSON as argument', function() {
        let body = { foo: 'bar' };
        var result = Response.ok().body(body).build(assertCallback(null, 200, body));
    });
    
    it('should call a function passing custom statusCode and body JSON as argument', function() {
        let body = { foo: 'bar' };
        var result = Response.status(123).body(body).build(assertCallback(null, 123, body));
    });
});