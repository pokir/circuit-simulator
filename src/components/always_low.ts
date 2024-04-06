import type p5 from 'p5';
import { Component } from './component.js';

export class AlwaysLow extends Component<0, 1> {
  constructor() {
    super([], 1);
  }

  computeOutput() {
    this.outputs[0].setValue(false);
  }

  drawComponent(p: p5) {

  }
}
