import { InputNode } from './input_node.js';

export class OutputNode {
  private connected: boolean = false;

  private connectedInputNode: InputNode | null = null;

  private resolved: boolean = false;

  private value: boolean = false;

  connectTo(inputNode: InputNode) {
    this.connected = true;
    this.connectedInputNode = inputNode;

    // tell the input node that it is connected
    this.connectedInputNode.connect();

    // if already resolved, resolve the input node directly
    if (this.resolved) {
      this.connectedInputNode.resolve(this.value);
    }
  }

  disconnect() {
    if (this.connected) {
      // tell the input node that it got disconnected
      (this.connectedInputNode as InputNode).disconnect();
      this.connectedInputNode = null;
    }

    this.connected = false;
  }

  resolve(value: boolean) {
    this.value = value;
    this.resolved = true;

    // if connected, also resolve the connected input node
    if (this.connected) {
      (this.connectedInputNode as InputNode).resolve(this.value);
    }
  }
}
