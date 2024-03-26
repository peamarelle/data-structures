import { Node } from "./node";

export class LinkedList<T> {
  private _head?: Node<T>;
  private _size: number = 0;

  public addHead(data: T): void {
    const head = this._head;
    this._head = new Node(data, head);
    this._size++;
  }

  public removeHead(): void {
    this._head = this._head?.next;
    this._size--;
  }

  /**
   * @param data
   * Removes the first element from the list that matches.
   */
  public remove(data: T): void {
    const nodeToRemove = new Node(data);
    let current = this._head;
    let nodeFound;

    if (current && current.isEqual(nodeToRemove)) {
      this._head = current.next;
      this._size--;
      return;
    }

    while (current) {
      if (current.next?.isEqual(nodeToRemove)) {
        nodeFound = current.next;
        break;
      } else {
        current = current.next;
      }
    }

    if (current && nodeFound) {
      current.next = nodeFound.next;
      this._size--;
    }
  }

  public reverse(): void {
    let current = this._head;
    let previous;
    let next;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this._head = previous;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public toString(): string {
    let listToPrint = "";
    let currentNode = this._head;

    for (let i = 1; i <= this._size; i++) {
      if (currentNode) {
        listToPrint += `Node ${i}: ${currentNode.toString()}`;

        if (currentNode.next) {
          listToPrint += " -> ";
        }

        currentNode = currentNode.next;
      }
    }

    return listToPrint;
  }

  public get head(): Node<T> | undefined {
    return this._head;
  }

  public get tail(): Node<T> | undefined {
    let current = this.head;

    while (current?.next) {
      current = current.next;
    }

    return current;
  }
}
