export class InputNode {
  private onResolve: () => void;

  private connected: boolean = false;

  private resolved: boolean = false;

  private value: boolean = false;

  constructor(onResolve: () => void) {
    this.onResolve = onResolve;
  }

  connect() {
    // connect an output node to this node
    this.connected = true;
  }

  disconnect() {
    // dis connect an output node from this node
    this.connected = false;

    // input node becomes unresolved if disconnected
    this.resolved = false;
    this.value = false;
  }

  isConnected() {
    return this.connected;
  }

  getValue() {
    // returns the value if resolved or false by default
    return this.resolved ? this.value : false;
  }

  resolve(value: boolean) {
    this.value = value;
    this.resolved = true;
    this.onResolve();
  }

  isResolved() {
    return this.resolved;
  }
}
