import { isDeepStrictEqual } from 'node:util'

export class Node<T> {
  private _data: T;
  private _next?: Node<T>;

  constructor(data: T, next?: Node<T>) {
    this._data = data;
    this._next = next;
  }

  public isEqual(other: Node<T>): boolean {
    return isDeepStrictEqual(this._data, other.data);
  }

  public toString(): string {
    return (<any>this._data).toString();
  }

  /**
   * Getters
   */

  public get data(): T {
    return this._data;
  }
  public get next(): Node<T> | undefined {
    return this._next;
  }

  /**
   * Setters
   */

  public set next(node: Node<T> | undefined) {
    this._next = node;
  }
}
