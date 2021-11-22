// nash_fcc_cip_002.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Assignment: Inventory Update (002)
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

function addUnique(arr1, arr2) {
	var length = arr2.length; // Inventory length
	
	for (let i = 0; i < length; i++) {
		var item = arr2[i][1];
		var isPresent = false;
		for (let j = 0; j < arr1.length; j++) {
			if (item == arr1[j][1]) {
				isPresent = true;
			}			
		}
		if (!isPresent) {
			arr1.push([0, item]);
		}
	}
	
	return arr1;
}

function updateQuantities(arr1, arr2) {
	var length = arr2.length; // Inventory length
	
	for (let i = 0; i < length; i++) {
		var item = arr2[i][1];
		var amount = 0;
		for (let j = 0; j < arr1.length; j++) {
			if (item == arr1[j][1]) {
				amount = arr2[i][0];
				arr1[j][0] = arr1[j][0] + amount;
			}			
		}
	}
	
	return arr1;
}

function alphabeticalSort(arr1) {
	var length = arr1.length;
	var index = [];
	var sorted = [];
	var output = [];
	
	for (let i = 0; i < length; i++) {
		sorted.push(arr1[i][1]);
		index.push(i);
	}
	
	for (let i = 0; i < length; i++) {
		var minimum = index[i];
		var minimumIndex = i;
		for (let j = i; j < length; j++) {
			if (sorted[minimum] > sorted[index[j]]) {
				minimum = index[j];
				minimumIndex = j;
			}
		}
		var temp = index[i];
		index[i] = minimum;
		index[minimumIndex] = temp;		
	}
	
	for (let i = 0; i < length; i++) {
		output.push(arr1[index[i]]);
	}
	
	return output;	
}

function updateInventory(arr1, arr2) {
	arr1 = addUnique(arr1, arr2);
	arr1 = updateQuantities(arr1, arr2);
	arr1 = alphabeticalSort(arr1);

	return arr1;
}

// Example inventory lists
var curInv = [
	[21, "Bowling Ball"],
	[2, "Dirty Sock"],
	[1, "Hair Pin"],
	[5, "Microphone"]
];

var newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"]
];

//var output = updateInventory(curInv, newInv);
//var output = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//console.log(output);