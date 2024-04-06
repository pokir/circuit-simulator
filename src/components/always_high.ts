import type p5 from 'p5';
import { Component } from './component.js';

export class AlwaysHigh extends Component<0, 1> {
  constructor() {
    super([], 1);
  }

  computeOutput() {
    this.outputs[0].setValue(true);
  }

  drawComponent(p: p5) {

  }
}
