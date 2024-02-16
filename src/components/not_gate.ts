import { Component } from './component.js';

export class NotGate extends Component<1, 1> {
  constructor() {
    super(1, 1);
  }

  resolveOutput() {
    this.getOutputs()[0].resolve(!this.getInputs()[0].getValue());
  }
}
