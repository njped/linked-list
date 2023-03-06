class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    this.data = data;
    this.size++;
  }

  remove(key) {
    this.key = key;
  }

  contains(key) {
    this.key = key;
  }

  size() {
    return this.size;
  }
}
