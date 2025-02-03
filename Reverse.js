class Node {
  constructor(newData) {
    this.data = newData;
    this.next = null;
  }
}

function reverseList(head) {
  // Initialize three pointers: curr, prev and next
  if (head == null || head.next == null) {
    return head;
  }
  let current = head;
  let previous = null;
  let next;

  // Traverse all the nodes of Linked List
  while (current !== null) {
    // Store next
    next = current.next;

    // Reverse current node's next pointer
    current.next = previous;

    // Move pointers one position ahead
    previous = current;
    current = next;
  }

  // Return the head of reversed linked list
  return previous;
}
function reverseListRecursive(head) {
  // base case
  if (head == null || head.next == null) {
    return head;
  }

  let smallHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return smallHead;
}
function printList(node) {
  while (node !== null) {
    console.log(" " + node.data);
    node = node.next;
  }
  console.log();
}

function middleOfLinkedList(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function linkedListCycle(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
}
// Driver Code
// Create a hard-coded linked list:
// 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// console.log("Given Linked list:");
// printList(head);

//head = reverseListRecursive(head);
let middleNode = middleOfLinkedList(head);
console.log(middleNode.data);
// console.log("Reversed Linked List:");
//printList(res);
