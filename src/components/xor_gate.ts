import { OutputNode } from '../output_node.js';
import { Component } from './component.js';

export class XorGate<numInputs extends number> extends Component<numInputs, 1> {
  constructor(inputs: OutputNode[] & { length: numInputs }) {
    super(inputs, 1);
  }

  computeOutput() {
    const outputValue = this.inputs
      .map((input) => input.getValue())
      .reduce((accumulator, inputValue) => accumulator !== inputValue);

    this.outputs[0].setValue(outputValue);
  }

  drawComponent() {

  }
}
