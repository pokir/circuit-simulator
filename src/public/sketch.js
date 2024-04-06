import { Circuit } from '../circuit.js';
import { AlwaysHigh } from '../components/always_high.js';
import { AlwaysLow } from '../components/always_low.js';
import { OrGate } from '../components/or_gate.js';

function createCircuit() {
  const circuit = new Circuit(5, 5);

  const a = new AlwaysHigh();
  a.setPosition();

  const b = new AlwaysLow();
  b.setPosition();

  const or = new OrGate([a.getOutputs()[0], b.getOutputs()[0]]);
  or.setPosition([100, 100]);

  circuit.addComponent(a);
  circuit.addComponent(b);
  circuit.addComponent(or);

  return circuit;
}

const sketch = (p) => {
  const circuit = createCircuit();

  /* eslint-disable-next-line no-param-reassign */
  p.setup = () => {
    p.createCanvas(window.innerWidth - 20, window.innerHeight - 20);
  };

  /* eslint-disable-next-line no-param-reassign */
  p.draw = () => {
    p.background(51);

    circuit.draw(p);
    circuit.update();
  };
};

/* eslint-disable-next-line no-undef, new-cap, no-new */
new p5(sketch, document.getElementsByTagName('main')[0]);
