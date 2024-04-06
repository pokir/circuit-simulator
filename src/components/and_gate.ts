import { OutputNode } from '../output_node.js';
import { Component } from './component.js';

export class AndGate<numInputs extends number> extends Component<numInputs, 1> {
  constructor(inputs: OutputNode[] & { length: numInputs }) {
    super(inputs, 1);
  }

  computeOutput() {
    const nextValue = this.inputs
      .reduce((accumulator, bit) => accumulator && bit.getValue(), true);
    this.outputs[0].setValue(nextValue);
  }

  drawComponent() {

  }
}
