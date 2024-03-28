import type p5 from 'p5';
import { Component } from './component.js';
import { OutputNode } from '../output_node.js';

export class OrGate<numInputs extends number> extends Component<numInputs, 1> {
  constructor(inputs: OutputNode[] & { length: numInputs }) {
    super(inputs, 1);
  }

  computeOutput() {
    const nextValue = this.getInputs()
      .reduce((accumulator, bit) => accumulator || bit.getValue(), false);

    this.getOutputs()[0].setValue(nextValue);
  }
}
