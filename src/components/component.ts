import type p5 from 'p5';
import { Drawable } from '../drawable.js';
import { OutputNode } from '../output_node.js';

export abstract class Component<numInputs extends number, numOutputs extends number>
implements Drawable {
  private position: [number, number] = [0, 0];

  private inputs: OutputNode[] & { length: numInputs };

  private outputs: OutputNode[] & { length: numOutputs };

  constructor(inputs: OutputNode[] & { length: numInputs }, numberOfOutputs: numOutputs) {
    this.inputs = inputs;

    this.outputs = new Array(numberOfOutputs)
      .fill(null)
      .map(() => new OutputNode(this)) as OutputNode[] & { length: numOutputs };
  }

  getInputs(): OutputNode[] & { length: numInputs } {
    return this.inputs;
  }

  getOutputs(): OutputNode[] & { length: numOutputs } {
    return this.outputs;
  }

  getPosition(): [number, number] {
    return this.position;
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

  // draws the component
  abstract draw(p: p5): void;
}
