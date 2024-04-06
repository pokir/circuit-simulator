import { OutputNode } from '../output_node.js';
import { Component } from './component.js';

export class NotGate extends Component<1, 1> {
  constructor(input: OutputNode) {
    super([input], 1);
  }

  computeOutput() {
    this.outputs[0].setValue(!this.inputs[0].getValue());
  }

  drawComponent() {

  }
}
