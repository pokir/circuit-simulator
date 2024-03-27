import type p5 from 'p5';
import { Drawable } from './drawable.js';
import { Updatable } from './updatable.js';
import { Component } from './components/component.js';
import { AlwaysHigh } from './components/always_high.js';
import { AlwaysLow } from './components/always_low.js';
import { AndGate } from './components/and_gate.js';

export class Circuit implements Updatable, Drawable {
  private gridWidth: number;

  private gridHeight: number;

  private components: Component<number, number>[] = [];

  constructor(gridWidth: number, gridHeight: number) {
    // gridWidth: width of the grid
    // gridHeight: height of the grid
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;

    const a = new AlwaysHigh();
    const b = new AlwaysLow();

    const or = new AndGate(2);

    a.getOutputs()[0].connectTo(or.getInputs()[0]);
    b.getOutputs()[0].connectTo(or.getInputs()[1]);

    this.addComponent(a);
    this.addComponent(b);
    this.addComponent(or);
  }

  addComponent(component: Component<number, number>) {
    this.components.push(component);
  }

  update() {
    // update the logic
    this.components.forEach((component) => {
      // start from components with no inputs
      if (component.getInputs().length === 0) {
        component.resolveOutput();
      }
    });
  }

  draw(p: p5) {
    this.components.forEach((component) => {
      // component.draw(p);
    });
  }
}
