import type p5 from 'p5';
import { Component } from './component.js';

export class AlwaysLow extends Component<0, 1> {
  constructor() {
    super([], 1);
  }

  computeOutput() {
    this.getOutputs()[0].setValue(false);
  }

  draw(p: p5) {
    p.fill(255, 0, 0);
    p.ellipse(...this.getPosition(), 30);
  }
}
