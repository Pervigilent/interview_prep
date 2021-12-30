// nash_fcc_cip_ds_002.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Subseries: Data Structures (ds_)
// Assignment: Create a Queue Class (002)
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

/*
We’ve started writing a PriorityQueue in the code editor.
You will need to add an enqueue method for adding items with a priority,
a dequeue method for removing and returning items,
a size method to return the number of items in the queue,
a front method to return the element at the front of the queue,
and finally an isEmpty method that will return true if the queue is empty or false if it is not.

The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. dequeue and front should return only the item's name, not its priority.
*/

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  	this.enqueue = function(value) {
  		this.collection.unshift(value);
  	};
  
  	this.dequeue = function() {
  		if (collection.length > 0) {
 			let index = 0;
 			let priority = this.collection[0][1];
	   		for (i = 0; i < this.collection.length; i++) {
	  			if (this.collection[i][1] <= priority) {
	  				index = i;
	  				priority = this.collection[i][1];
	  			}
	  		}
	  		
	  		return collection[index][0];	 		
  		}

		return undefined;
  	};
  
  	this.front = function() {
  		if (collection.length > 0) {
  			return collection[collection.length - 1];  		

  		} else {
  			return undefined;
  		}  	
  	};
  
  	this.size = function() {
  		return this.collection.length;  
  	};
  	
	this.isEmpty = function() {
		return (this.collection.length == 0);
	};
  // Only change code above this line
}

// My approach above was flawed.

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
	this.enqueue = function (value) {
		if (this.isEmpty()) {
			return this.collection.push(value);
		}

		this.collection = this.collection.reverse();
		var index = this.collection.findIndex(function (item) {
			return value[1] >= item[1];
		});
		
		if (index === -1) {
			this.collection.push(value);
		} else {
			this.collection.splice(index, 0, value);
		}
		this.collection = this.collection.reverse();
	};

	this.dequeue = function () {
		if (this.collection.length > 0) {
			return this.collection.shift()[0];
		} else {
			return undefined;
		}
	};

	this.size = function () {
		return this.collection.length;
	};

	this.front = function () {
		return this.collection[0][0];
	};

	this.isEmpty = function () {
		return (this.collection.length == 0);
	};
  // Only change code above this line
}


