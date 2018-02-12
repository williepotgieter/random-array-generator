var MersenneTwister = require('mersenne-twister');
var generator = new MersenneTwister();


function containsVal(arr, val){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == val){
      return true;
    }
  }
  return false;
}


//{max: x, min: y; elements: z}
exports.randomArray = function(arg) {
  var tempArr = [];
  var tempNum;

  for(var i = 0; i < arg.elements; i++){

    do{
      tempNum = Math.ceil((generator.random()*(arg.max - arg.min)) + arg.min);
    }
    while (containsVal(tempArr, tempNum));

    tempArr.push(tempNum);
  }

  return tempArr;
}
