import { LinkedList } from "./linked-list/linked-list";

const main = () => {
  console.log("Linked List");

  const list = new LinkedList();
  list.addHead("foo");
  list.addHead("bar");
  list.addHead("baz");

  list.reverse();

  console.log("list", list.toString());
};

main();
