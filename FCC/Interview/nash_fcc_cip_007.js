// nash_fcc_cip_007.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Assignment: Algorithms - Implement Insertion Sort (007)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

// WARNING: Remove header before submission.

function insertionSort(array) {
  // Only change code below this line
	let length = array.length;
	
	for (let i = 0; i < length; i++) { 
		let position = i;
		for (let j = 0; j < i; j++) {
			if (array[j] > array[i]) {
				position = j;
				break;		
			}
		}
		if (position != i) { // Not strictly necessary
			// Ad hoc array insertion
			let temporary = array[i];
			for (let k = i; k > position; k--) {
				array[k] = array[k - 1];		
			}
			array[position] = temporary;
		}
	}
	
	return array;
  // Only change code above this line
}

// WARNING: Remove footer before submission.

output = insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
console.log(output);
