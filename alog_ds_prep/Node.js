class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value) {
    newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  traverse() {
    if (this.head) {
      let temp = this.head;
      while (temp.next !== null) {
        console.log(temp);
        temp = temp.next;
      }
    }
  }

  remove(value) {
    let temp = this.head;
    let prev = null;
    let removed = null;
    while (temp.next !== null) {
      if (temp.value === value) {
        removed = temp;
        break;
      }
      prev = temp;
    }
    if (removed) {
      temp = temp.next;
      prev.next = temp;
    }
    return removed;
  }
}
