import type p5 from 'p5';
import { Component } from './component.js';

export class OrGate<numInputs extends number> extends Component<numInputs, 1> {
  constructor(numberOfInputs: numInputs) {
    super(numberOfInputs, 1);
  }

  resolveOutput() {
    const nextValue = this.getInputs()
      .reduce((accumulator, bit) => accumulator || bit.getValue(), false);

    this.getOutputs()[0].resolve(nextValue);
  }

  draw(p: p5) {
    
  }
}
