// nash_fcc_cip_014.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Assignment: Data Structures - Perform a Union of Two Sets (014)
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-a-union-on-two-sets

/*
In this exercise we are going to perform a union on two sets of data. We will create a method on our Set data structure called union. This method should take another Set as an argument and return the union of the two sets, excluding any duplicate values.
*/

class Set {
  constructor() {
    // This will hold the set
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
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // Only change code below this line
	union(item) {
		for (let key of item.values()) {
			this.add(key);
		}
		
		return this;			
	}
  // Only change code above this line
}
// End of submission

const setA = new Set()
for (let x of ['a', 'b', 'c']) {
	console.log(x);
	setA.add(x);
}
const setB = new Set();
//for (let y of ['a', 'b', 'c', 'd', 'e']) {
//	console.log(y);
//	setB.add(y);
//}
for (let y of ['c', 'd']) {
	console.log(y);
	setB.add(y);
}
setA.union(setB);
console.log(setA.values());


