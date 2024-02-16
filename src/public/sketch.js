import { Circuit } from '../circuit.js';

const circuit = new Circuit(5, 5);

const sketch = (p) => {
  /* eslint-disable-next-line no-param-reassign */
  p.setup = () => {
    p.createCanvas(window.innerWidth - 20, window.innerHeight - 20);
  };

  /* eslint-disable-next-line no-param-reassign */
  p.draw = () => {
    p.background(51);

    if (p.frameCount % 60 === 0) {
      circuit.draw();
      circuit.update();
    }
  };
};

/* eslint-disable-next-line no-undef, new-cap, no-new */
new p5(sketch, document.getElementsByTagName('main')[0]);
