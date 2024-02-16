import { Component } from './component.js';

export class AlwaysHigh extends Component<0, 1> {
  constructor() {
    super(0, 1);
  }

  resolveOutput() {
    this.getOutputs()[0].resolve(true);
  }
}
