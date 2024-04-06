import type p5 from 'p5';
import { Component } from './component.js';
import { OutputNode } from '../output_node.js';

export class OrGate<numInputs extends number> extends Component<numInputs, 1> {
  constructor(inputs: OutputNode[] & { length: numInputs }) {
    super(inputs, 1);
  }

  computeOutput() {
    const nextValue = this.inputs
      .reduce((accumulator, bit) => accumulator || bit.getValue(), false);

    this.outputs[0].setValue(nextValue);
  }

  drawComponent(p: p5) {

  }
}
