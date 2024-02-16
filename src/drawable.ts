import type p5 from 'p5';

export interface Drawable {
  draw(p: p5): void;
}
