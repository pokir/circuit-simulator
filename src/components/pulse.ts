import { Component } from './component.js';

export class Pulse extends Component<0, 1> {
  lowTime: number;

  highTime: number;

  updateCount: number;

  constructor(lowTime: number, highTime: number, timeOffset: number = 0) {
    // lowTime, highTime, and timeOffset are in update frames
    super(0, 1);

    this.lowTime = lowTime;
    this.highTime = highTime;
    this.updateCount = timeOffset;
  }

  resolveOutput() {
    const total = this.lowTime + this.highTime;

    if (this.updateCount % total < this.lowTime) this.getOutputs()[0].resolve(false);
    else this.getOutputs()[0].resolve(true);

    this.updateCount += 1;
  }
}
