import { OutputNode } from '../output_node.js';
import { Component } from './component.js';

export class NotGate extends Component<1, 1> {
  constructor(input: OutputNode) {
    super([input], 1);
  }

  computeOutput() {
    this.getOutputs()[0].setValue(!this.getInputs()[0].getValue());
  }
}
