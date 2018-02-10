var MersenneTwister = require('mersenne-twister');
var generator = new MersenneTwister();

//{max: x, min: y; elements: z}
exports.randomArray = function(arg) {
  var temp = [];

  for(var i = 0; i < arg.elements; i++){
    temp.push(Math.ceil((generator.random()*(arg.max - arg.min)) + arg.min));
  }

  return temp;
}
