import { Component } from './component.js';

export class Junction<numOutputs extends number> extends Component<1, numOutputs> {
  constructor(numberOfOutputs: numOutputs) {
    super(1, numberOfOutputs);
  }

  resolveOutput() {
    const inputValue = this.getInputs()[0].getValue();

    this.getOutputs().forEach((output) => {
      output.resolve(inputValue);
    });
  }
}
