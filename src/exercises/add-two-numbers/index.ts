import { ListNode } from "./list-node";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0;
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  while (l1 || l2 || carry) {
    const n1 = l1?.val;
    const n2 = l2?.val;

    const sum = (n1 ?? 0) + (n2 ?? 0) + carry;

    carry = Math.floor(sum / 10);

    const node = new ListNode(sum % 10);

    if (!head) {
      head = tail = node;
    } else {
      tail!.next = node;
      tail = tail!.next;
    }

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return head ?? null;
}

/**
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 */
const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));


const result = addTwoNumbers(l1, l2);

let list = result;

while (list) {
  console.log(list.val);
  list = list.next;
}
