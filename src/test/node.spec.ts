import { Node } from "../linked-list/node";

describe('Node test suite', () => {
  it('should create a new node', () => {
    const node = new Node({ name: 'John', lastName: 'Doe' });

    expect(node.data).toEqual({ name: 'John', lastName: 'Doe' });
  })
})
