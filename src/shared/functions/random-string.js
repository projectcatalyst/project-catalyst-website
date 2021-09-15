const randomString = (length = 8) =>
  Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length)

export default randomString