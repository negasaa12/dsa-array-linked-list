/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
      let newNode = new Node(val);
        
        if(!this.head) {
          this.head = newNode;
          this.tail = this.head;
          } else{
            this.tail.next = newNode;
            this.tail = newNode
          }
      this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    // newNode.next = this.head;
    // this.head = newNode;
    // this.length += 1
      if(this.head === null){
          this.head = newNode;
      }else{
          newNode.next = this.head;
          this.head = newNode;
      }

      if(this.length === 0) this.tail = this.head;

      this.length += 1;
  }


  /** pop(): return & remove last item. */

  pop() {

    if (this.length === 0) return undefined; // Empty list

  if (this.length === 1) {
    const value = this.head.val;
    this.head = null;
    this.tail = null;
    this.length = 0;
    return value;
  }

  let currentNode = this.head;
  let newTail = currentNode;

  while (currentNode.next) {
    newTail = currentNode;
    currentNode = currentNode.next;
  }

  this.tail = newTail;
  this.tail.next = null;
  this.length -= 1;

  return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
   if (this.length === 0) return undefined; // Empty list

  const removedNode = this.head;

  if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  } else {
    this.head = this.head.next;
    this.length -= 1;
  }

  return removedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined; // Index out of bounds
    }
  
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }
  
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return false; // Index out of bounds
    }
  
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }
  
    currentNode.val = val;
    return true;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false; // Index out of bounds
    }
  
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
  
    if (idx === this.length) {
      this.push(val);
      return true;
    }
  
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentIndex < idx - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }
  
    const newNode = new Node(val);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  
    this.length++;
    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined; // Index out of bounds
    }
  
    if (idx === 0) {
      return this.shift();
    }
  
    if (idx === this.length - 1) {
      return this.pop();
    }
  
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentIndex < idx - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }
  
    const removedNode = currentNode.next;
    currentNode.next = removedNode.next;
  
    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0; // Empty list, average is 0
    }
  
    let sum = 0;
    let currentNode = this.head;
  
    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
  
    return sum / this.length;
  }
  
}


const numbers = new LinkedList();

numbers.push(2);
numbers.push(3);
numbers.push(443);


module.exports = LinkedList;
