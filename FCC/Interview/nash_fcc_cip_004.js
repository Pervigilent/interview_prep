// nash_fcc_cip_004.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Assignment: Algorithms - Pairwise (004)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise


/*
// WARNING: Apparently, FCC (freeCodeCamp) has problem handling multiple functions in the code.
// So I used the following script:

function pairwise(arr, arg) {
	let length = arr.length;
	let sum = 0;
	let excluded = [];
  let isExcluded = false;
	
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			if (arr[i] + arr[j] == arg) {
        isExcluded = false;
        for (let k = 0; k < excluded.length; k++) {
          if (excluded[k] == i || excluded[k] == j) {
            isExcluded = true;
          }
        }      
				if (isExcluded) {
					// Do nothing
				} else {
					sum += i + j;
					excluded.push(i);
					excluded.push(j);
				}
			}
		}		
	}
	
	//return arg;
	return sum;
}
*/

function isExcluded(arr, arg) {
	output = false;
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arg) {
			output = true;
		}
	}
	
	return output;
}

function pairwise(arr, arg) {
	let length = arr.length;
	let sum = 0;
	let excluded = [];
	
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			if (arr[i] + arr[j] == arg) {
				if (isExcluded(excluded, i) || isExcluded(excluded, j)) {
					// Do nothing
				} else {
					sum += i + j;
					excluded.push(i);
					excluded.push(j);
				}
			}
		}		
	}
	
	//return arg;
	return sum;
}

output = pairwise([1, 4, 2, 3, 0, 5], 7);
console.log(output);