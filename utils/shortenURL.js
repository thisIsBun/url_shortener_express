const BASE62 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const shortenURL = (length) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * BASE62.length)
    result += BASE62[index]
  }

  return result
}

export default shortenURL