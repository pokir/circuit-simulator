import { InputNode } from '../input_node.js';
import { OutputNode } from '../output_node.js';

export abstract class Component<numInputs extends number, numOutputs extends number> {
  private inputs: InputNode[] & { length: numInputs };

  private outputs: OutputNode[] & { length: numOutputs };

  constructor(numberOfInputs: numInputs, numberOfOutputs: numOutputs) {
    this.inputs = new Array(numberOfInputs)
      .fill(null)
      .map(
        () => new InputNode(() => this.onInputResolved()),
      ) as InputNode[] & { length: numInputs };

    this.outputs = new Array(numberOfOutputs)
      .fill(null)
      .map(() => new OutputNode()) as OutputNode[] & { length: numOutputs };
  }

  onInputResolved() {
    const inputsReady = this.inputs.every((input) => input.isResolved() || !input.isConnected());

    if (inputsReady) {
      this.resolveOutput();
    }
  }

  getInputs() {
    return this.inputs.slice();
  }

  getOutputs() {
    return this.outputs.slice();
  }

  // does the component's logic
  abstract resolveOutput(): void;
}
