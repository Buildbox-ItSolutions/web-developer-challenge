export function uniqueId(length = 16) {
  return parseInt(String(Math.ceil(Math.random() * Date.now())))
    .toString(36)
    .substring(2, length + 2)
}
