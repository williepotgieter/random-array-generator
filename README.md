

## Description

Generates an array of unique random integers using a Mersenne-twister algorithm.

## Install

```bash
npm install random-array-generator
```

## Usage

Add the following line of code to your project:

```bash
var generator = require('random-array-generator');
```

To generate an array of random numbers, pass an object into the "randomArray()" function, which will then return an array containing the generated numbers. The object __*must*__ be in the form:

```bash
generator.randomArray({min: x, max: y, elements: z});
```

Where __*x*__ and __*y*__ represents the range (inclusive) of the random numbers to be generated and __*z*__ is the number of random integers to be generated.

__*Example:*__
```bash
// import package into your project
var generator = require('random-array-generator');

// Generate 6 random numbers between 1 and 49 (inclusive) and log to the console.
console.log(generator.randomArray({min: 1, max: 49, elements: 6}));

// Result: [2, 34, 17, 11, 47, 25]
```

## Acknowledgments

[mersenne-twister](https://www.npmjs.com/package/mersenne-twister)

## License

[MIT](http://vjpr.mit-license.org)
