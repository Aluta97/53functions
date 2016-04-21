module.exports = function(lists){
  var max = 1000
lists.forEach(function(list){
  if(list < max){
    max = list;
  }
})
  return max;
}
