// Single Linked list.
class Node {
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
  //----------------------------------------------------------------------
  // append:- insert a new node at the end of the linked list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  //--------------------------------------------------------------------------
  // prepend :-Insert a new node at the beginning of the linked list.

  perpend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  //--------------------------------------------------------------------------

  // Insert at the given position in linked list.

  insertAtThePosition(data, position) {
    // handle first position.
    if (position == 1) {
      this.perpend(data);
      return;
    } else {
      let temp = this.head;
      let count = 1;
      while (count < position - 1) {
        temp = temp.next;
        count++;
      }
      // handle last position
      if (temp.next == null) {
        this.append(data);
        return;
      }
      const middleNode = new Node(data);
      middleNode.next = temp.next;
      temp.next = middleNode;
    }
  }

  //------------------------------------------------------------------
  // Delete :-Remove the first occurence of a node with the given data.
  deleteOne(position) {
    if (position < 0 || position >= this.size) {
      console.log("Invalid position");
      return;
    }

    if (position === 0) {
      // Delete the head node
      this.head = this.head.next;
    } else {
      // Traverse to the node before the position
      let current = this.head;
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      // Skip the node to be deleted
      previous.next = current.next;
    }
    // this.size--;
  }

  delete(position) {
    if (position < 1) {
      console.log("Invalid position");
      return;
    }
    if (position === 1) {
      this.head = this.head.next;
    } else {
      let previous = this.head;
      let count = 1;
      while (count < position - 1) {
        previous = previous.next;
        count++;
      }
      let current = previous.next;
      previous.next = current.next;
    }
  }
  //-------------------------------------------------------------------
  // Search - search the data which are given data.
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false; // data not found.
  }
  //----------------------------------------------------------------------

  // print the linked list
  printFun() {
    let current = this.head;
    const element = [];
    while (current !== null) {
      element.push(current.data);
      current = current.next;
    }
    console.log(element);
    // for (let i = 0; i < element.length; i++) {
    //   console.log(element[i]);
    // }
  }
  reverseLinked(data) {
    let current = this.head;
    let previous = null;
    let forword = null;
    while (current !== null) {
      forword = current.next;
      current.next = previous;
      previous = current;
      current = forword;
    }
    return previous;
  }
}
/*
 if(head==null||head.next==null){
    return head;
  }
    let current = head;
    let previous = null;
    while (current !== null) {
      const forword = current.next;
      current.next = previous;
       previous = current;
      current = forword;
    }
    return previous; 
*/
//----------------------------------------------------------------
// 10 - 20 - 30 -  40
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(40);
linkedList.append(50);
// linkedList.insertAtThePosition(30, 5);
//linkedList.delete(1);

//linkedList.perpend(100);
//linkedList.perpend(110);
//linkedList.perpend(150);
linkedList.printFun();
linkedList.reverseLinked();
linkedList.printFun();
// linkedList.append(20);
// linkedList.append(30);
// linkedList.append(40);
// linkedList.printFun();
// console.log(linkedList.search(20));
// console.log(linkedList.search(850));
