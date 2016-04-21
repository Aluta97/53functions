var hello_list = require('../hello_list');
var assert = require('assert');

describe('hello_list', function() {

  it("it should take a number and return a list of 'hello world' entries equal to the number supplied", function() {
    assert.equal(hello_list(10).length, (10));

  })
});
