// nash_fcc_cip_ds_003.js
// Author: Stewart Nash (nash_)
// Website: freeCodeCamp (fcc_)
// Series: Coding Interview Prep (cip_)
// Subseries: Data Structures
// Assignment: Create a Circular Queue (003)
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue

/*
In this challenge we will implement a circular queue. The circular queue should provide enqueue and dequeue methods which allow you to read from and write to the queue. The class itself should also accept an integer argument which you can use to specify the size of the queue when created. We've written the starting version of this class for you in the code editor.

When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue. The enqueue method should return the item you enqueued if it is successful; otherwise it will return null.

Likewise, the read pointer should advance forward as you dequeue items. When you dequeue an item, that item should be returned. If you cannot dequeue an item, you should return null.

The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer should not be able to advance past data you have written.
*/

class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
	if (this.queue[this.write] == null) {
		this.queue[this.write] = item;
		if (this.write < this.max) {
			this.write++;
		} else {
			this.write = 0;
		}
		
		return item;
	} else {
		return null;
	}
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
	if (this.queue[this.read] != null) {
		let output = this.queue[this.read];
		this.queue[this.read] = null;	
		if (this.read < this.max) {
			this.read++;
		} else {
			this.read = 0;
		}
		return output;	
	} else {
		return null;
	}
    // Only change code above this line
  }
}


