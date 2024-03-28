import type p5 from 'p5';
import { Drawable } from './drawable.js';
import { Updatable } from './updatable.js';
import { Component } from './components/component.js';
import { AlwaysHigh } from './components/always_high.js';
import { AlwaysLow } from './components/always_low.js';
import { OrGate } from './components/or_gate.js';

export class Circuit implements Updatable, Drawable {
  private gridWidth: number;

  private gridHeight: number;

  private components: Component<number, number>[] = [];

  constructor(gridWidth: number, gridHeight: number) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;

    const a = new AlwaysHigh();
    const b = new AlwaysLow();

    const or = new OrGate([a.getOutputs()[0], b.getOutputs()[0]]);

    this.addComponent(a);
    this.addComponent(b);
    this.addComponent(or);
  }

  addComponent(component: Component<number, number>) {
    this.components.push(component);
  }

  update() {
    // find the gates whose outputs do not lead to any other gates
    const startingGates = this.components.filter((component) =>
      // every output of the component must be unconnected
      component.getOutputs().every((output) =>
        // every component must not contain the output as an input
        this.components.every((component) => !component.getInputs().includes(output))));

    startingGates.forEach((component) => component.resolve());
  }

  draw(p: p5) {
    this.components.forEach((component) => {
      p.push();
      component.draw(p);
      p.pop();
    });
  }
}
