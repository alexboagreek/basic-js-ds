const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;
  prev = null;
  
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let el = new ListNode(value, null);

    !this.head ? (this.head = el) : (this.prev.next = el);

    this.prev = el;

    return this.head;
  }

  dequeue() {
    let s = this.head;

    if (!s.next) {
      this.head = null;
      this.prev = null;
    } else {
      this.head = s.next;
    }

    return s.value && s.value != undefined ? s.value : null;
  }
}

module.exports = {
  Queue,
};
