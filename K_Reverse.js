class Node {
  constructor(newData) {
    this.data = newData;
    this.next = null;
  }
}

function reverseGroup(head, k) {
  let count = 0;
  let current = head;

  while (current && count != k) {
    current = current.next;
    count++;
  }

  if (count == k) {
    current = reverseGroup(current, k);
    while (count > 0) {
      let temp = head.next;
      head.next = current;
      current = head;
      head = temp;
      count--;
    }
    head = current;
  }
  return head;
  /*
    // base case
  if (head == null) return null;
  // step - 1 reverse first group
  let current = head;
  let previous = null;
  let count = 0;
  let forword;

  while (current !== null && count < k) {
    forword = current.next;
    current.next = previous;
    previous = current;
    current = forword;
    count++;
  }
  // step -2 recursive dekh lega.
  if (forword !== null) {
    head.next = reverseGroup(forword, k);
  }
  //step 3 previous head of reverse list
  return previous;
  */
}

function printList(node) {
  let arr = [];
  while (node !== null) {
    arr.push(node.data);
    node = node.next;
  }
  console.log(arr);
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head = reverseGroup(head, 3);
printList(head);
