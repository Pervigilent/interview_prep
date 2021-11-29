// nash_fcc_cip_010.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Assignment: Data Structures - Create a Queue Class (010)
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-queue-class

/*
Write an enqueue method that pushes an element to the tail of the queue,
a dequeue method that removes and returns the front element,
a front method that lets us see the front element,
a size method that shows the length,
and an isEmpty method to check if the queue is empty.
*/

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line  
  	this.enqueue = function(value) {
  		collection.unshift(value);
  	}
  
  	this.dequeue = function() {
  		return collection.pop();
  	}
  
  	this.front = function() {
  		if (collection.length > 0) {
  			return collection[collection.length - 1];  		
  		} else {
  			return undefined;
  		}  	
  	}
  
  	this.size = function() {
  		return collection.length;  	
  	}

	this.isEmpty = function() {
		return (collection.length == 0);
	}
  // Only change code above this line
}
