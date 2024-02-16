import { Component } from './component.js';

export class XorGate extends Component<2, 1> {
  constructor() {
    super(2, 1);
  }

  resolveOutput() {
    const input1 = this.getInputs()[0].getValue();
    const input2 = this.getInputs()[1].getValue();
    this.getOutputs()[0].resolve(input1 !== input2);
  }
}
