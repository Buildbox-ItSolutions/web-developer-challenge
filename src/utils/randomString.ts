import { random } from './random';

export function randomString(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  return Array.from({ length }, () =>
    chars.charAt(random(0, chars.length - 1)),
  ).join('');
}
