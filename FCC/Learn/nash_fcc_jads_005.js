// nash_fcc_jads_005.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: JavaScript Algorithms and Data Structures (jads_)
// Assignment: Basic JavaScript - Use Recursion to Create a Range of Numbers (005)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers

/*
We have defined a function named rangeOfNumbers with two parameters.
The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter.
The starting number will always be less than or equal to the ending number.
Your function must use recursion by calling itself and not use loops of any kind.
It should also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
	if (startNum == endNum) {
		return [startNum];
	} else {
		const countArray = rangeOfNumbers(startNum + 1, endNum);
		countArray.unshift(startNum);
		return countArray;	
	}
};

console.log(rangeOfNumbers(1, 5));
