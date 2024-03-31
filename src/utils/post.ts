export const generateUniqueId = (): string => {
  const timestamp = Date.now()
  const randomString = Math.random().toString(16).slice(2)
  const uniqueId = `${timestamp}${randomString}`
  return uniqueId
}
