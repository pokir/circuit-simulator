import { Component } from './components/component.js';

export class OutputNode {
  private owner: Component<number, number>;

  private value: boolean = false;

  constructor(owner: Component<number, number>) {
    this.owner = owner;
  }

  getOwner() {
    return this.owner;
  }

  getValue(): boolean {
    return this.value;
  }

  setValue(value: boolean) {
    this.value = value;
  }
}
