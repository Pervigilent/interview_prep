// nash_fcc_cip_ds_004.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Subseries: Data Structures (ds_)
// Assignment: Create a Set Class (004)
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class

/*
Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise.

Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return true. Otherwise, it should return false. Create a size method that returns the size of the set collection.
*/

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
 	add(item) {
 		/*
 		if (has(item)) {
 			return false;
 		} else {
 			this.dictionary[item] = item;
 			this.length++;
 			return true; 		
 		}
 		*/
  		if (this.dictionary[item] != undefined) {
 			return false;
 		} else {
 			this.dictionary[item] = item;
 			this.length++;
 			return true; 		
 		}		
 	}
 	
 	remove(item) {
 		/*
 		if (has(item)) {
 			return false;
 		} else {
 			delete this.dictionary[item];
 			this.length--;
 			return true;
 		}
 		*/
  		if (this.dictionary[item] == undefined) {
 			return false;
 		} else {
 			delete this.dictionary[item];
 			this.length--;
 			return true;
 		}		
 	}
 	
 	size() {
 		return this.length; 	
 	}
  // Only change code above this line
}


