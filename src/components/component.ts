import type p5 from 'p5';
import { Drawable } from '../drawable.js';
import { OutputNode } from '../output_node.js';

enum Rotation {
  NONE,
  RIGHT,
  HALF_TURN,
  LEFT
}

export abstract class Component<numInputs extends number, numOutputs extends number>
implements Drawable {
  private position: [number, number] = [0, 0];

  private rotation: Rotation = Rotation.NONE;

  protected inputs: OutputNode[] & { length: numInputs };

  protected outputs: OutputNode[] & { length: numOutputs };

  constructor(inputs: OutputNode[] & { length: numInputs }, numberOfOutputs: numOutputs) {
    this.inputs = inputs;

    this.outputs = new Array(numberOfOutputs)
      .fill(null)
      .map(() => new OutputNode(this)) as OutputNode[] & { length: numOutputs };
  }

  getInputs() {
    return this.inputs;
  }

  getOutputs() {
    return this.outputs;
  }

  setPosition(position: [number, number]) {
    this.position = position;
  }

  resolve(): void {
    // resolve all inputs first
    const inputGates = new Set(this.inputs.map((input: OutputNode) => input.getOwner()));

    inputGates.forEach((inputGate) => {
      inputGate.resolve();
    });

    // compute the output
    this.computeOutput();
  }

  // does the component's logic
  abstract computeOutput(): void;

  draw(p: p5) {
    p.push();

    switch (this.rotation) {
      case Rotation.RIGHT:
        p.rotate(90);
        break;
      case Rotation.HALF_TURN:
        p.rotate(180);
        break;
      case Rotation.LEFT:
        p.rotate(270);
        break;
      default: break;
    }

    p.translate(...this.position);

    this.drawComponent(p);

    p.pop();
  }

  // draws the component
  abstract drawComponent(p: p5): void;
}
