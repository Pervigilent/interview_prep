// nash_fcc_cip_001.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Assignment: Find the Symmetric Difference (001)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

function isPresent(number, array) { // Find out if number is present in array
  var present = false;
  
  for (let i = 0; i < array.length; i++) {
	var value = array[i];
	if (number === value) {
		present = true;
	}
  }
  return present;
  
}

function removeDuplicates(array) {
	var unique = [];
	var length = array.length;
	
	for (let i = 0; i < length; i++) {
		var value = array.pop();
		if (!isPresent(value, array)) {
			unique.push(value);
		}
	}
	unique = unique.reverse();
	
	return unique;	
}

function symDiff(firstArray, secondArray) {
  var unique = [];
  
  for (let j = 0; j < firstArray.length; j++) { // Add unique elements of first array
	var value = firstArray[j];
    if (!isPresent(value, secondArray)) {
      unique.push(value);
    }
  }
  
  for (let j = 0; j < secondArray.length; j++) { // Add unique elements of first array
	var value = secondArray[j];
    if (!isPresent(value, firstArray)) {
      unique.push(value);
    }
  }   

  return unique;
}

function sym(args) {
  var isFirst = true;
  var unique = [];

  for (let i = 0; i < arguments.length; i++) {
	var array = arguments[i];
    if (isFirst) {
	  unique = array;
      isFirst = false;
    } else {
      unique = symDiff(unique, array);
    }	  
  }
  
  unique = removeDuplicates(unique);
  args = unique;

  return args;
}

//var output = sym([1, 2, 3, 3], [5, 2, 1, 4]);
//console.log(output);