import type p5 from 'p5';
import { Component } from './component.js';

export class AlwaysHigh extends Component<0, 1> {
  constructor() {
    super([], 1);
  }

  computeOutput() {
    this.getOutputs()[0].setValue(true);
  }

  draw(p: p5) {
    p.fill(0, 255, 0);
    p.ellipse(...this.getPosition(), 30);
  }
}
