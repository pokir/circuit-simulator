import { OutputNode } from '../output_node.js';
import { Component } from './component.js';

export class AndGate<numInputs extends number> extends Component<numInputs, 1> {
  constructor(inputs: OutputNode[] & { length: numInputs }) {
    super(inputs, 1);
  }

  computeOutput() {
    const nextValue = this.getInputs()
      .reduce((accumulator, bit) => accumulator && bit.getValue(), true);
    this.getOutputs()[0].setValue(nextValue);
  }

  draw() {

  }
}
