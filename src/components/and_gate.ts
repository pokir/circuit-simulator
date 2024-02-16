import { Component } from './component.js';

export class AndGate<numInputs extends number> extends Component<numInputs, 1> {
  constructor(numberOfInputs: numInputs) {
    super(numberOfInputs, 1);
  }

  resolveOutput() {
    const nextValue = this.getInputs()
      .reduce((accumulator, bit) => accumulator && bit.getValue(), true);
    this.getOutputs()[0].resolve(nextValue);
  }
}
