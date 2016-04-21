module.exports = function(num){
var max = 0;
num.forEach(function(high){
  if(high > max){
    max = high;

    console.log(max);
  }
})
  return max;
}
