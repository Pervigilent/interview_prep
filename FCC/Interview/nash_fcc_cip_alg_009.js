// nash_fcc_cip_alg_009.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Subseries: Algorithms (alg_)
// Assignment: Implement Merge Sort (009)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-merge-sort

/*
function merge(left, right) {
	let sorted = [];
	
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sorted.push(left.shift());	
		} else {
			sorted.push(right.shift());	
		}
	};
	
	return sorted.concat(left.slice().concat(right.slice()));
}

function mergeSort(array) {
  // Only change code below this line
	if (array.length < 2) {
		return array;	
	} else {
		let middle = Math.floor(array.length / 2);
		let left = mergeSort(array.slice(0, middle));
		let right = mergeSort(array.slice(middle));
		
		return merge(left, right);
	}
  // Only change code above this line
}
*/

// I don't understand merge sort or quick sort yet.
// I used the algorithm from Digital Ocean.
// https://www.digitalocean.com/community/tutorials/js-understanding-merge-sort

// WARNING: Remove header before submission.

function mergeSort(array) {
  // Only change code below this line
	if (array.length < 2) {
		return array;	
	} else {
		let middle = Math.floor(array.length / 2);
		let left = mergeSort(array.slice(0, middle));
		let right = mergeSort(array.slice(middle));
		
		var merge = (left, right) => {
			let sorted = [];
			
			while (left.length && right.length) {
				if (left[0] < right[0]) {
					sorted.push(left.shift());
				} else {
					sorted.push(right.shift());			
				}
			}
			
			return sorted.concat(left.slice().concat(right.slice()));		
		};
		
		return merge(left, right);
	}
	
	return array;
  // Only change code above this line
}

// WARNING: Remove footer before submission.

output = mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
console.log(output);
