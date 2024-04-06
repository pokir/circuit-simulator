import { OutputNode } from '../output_node.js';
import { Component } from './component.js';

export class Junction<numOutputs extends number> extends Component<1, numOutputs> {
  constructor(input: OutputNode, numberOfOutputs: numOutputs) {
    super([input], numberOfOutputs);
  }

  computeOutput() {
    const inputValue = this.inputs[0].getValue();

    this.outputs.forEach((output) => {
      output.setValue(inputValue);
    });
  }

  drawComponent() {

  }
}
