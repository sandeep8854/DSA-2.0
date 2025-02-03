// 2- add two numbers.
class List_Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  addTwoLinkedListNumber(l1, l2) {
    let dummy = new List_Node();
    let result = dummy;
    let total = 0;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
      total = carry;
      if (l1 !== null) {
        total += l1.data;
        l1 = l1.next;
      }
      if (l2 !== null) {
        total += l2.data;
        l2 = l2.next;
      }

      let reminder = total % 10;
      carry = Math.floor(total / 10);
      dummy.next = new List_Node(reminder);
      dummy = dummy.next;
    }
    return result.next;
  }
}
// helpher function to create a linked list from array.

function linkedlistArray(arr) {
  let dummy = new List_Node();
  let temp = dummy;
  for (let num of arr) {
    temp.next = new List_Node(num);
    temp = temp.next;
  }
  return dummy.next;
}

function printLinkedList(l) {
  let result = [];
  while (l !== null) {
    result.push(l.data);
    l = l.next;
  }
  console.log(result.join(" -> "));
}

// create linked list from array.
let l1 = linkedlistArray([2, 4, 3]);
let l2 = linkedlistArray([5, 6, 4]);
let linkedList = new LinkedList();
let result = linkedList.addTwoLinkedListNumber(l1, l2);
printLinkedList(result);
