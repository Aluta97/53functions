var assert = require('assert');
var highest = require('../highest');
var lowest = require('../lowest');

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("high_low", function(){
  it('it should return the highest number in the list', function(){
    assert.equal(highest(num),10);
  })
  it('it should return the lowest number in the list', function(){
    assert.equal(lowest(num),1);
  })
});
