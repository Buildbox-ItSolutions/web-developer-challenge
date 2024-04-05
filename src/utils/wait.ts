import { random } from './random';

export const wait = (ms = random(200, 750)) =>
  new Promise((resolve) => setTimeout(resolve, ms));
