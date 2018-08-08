const { func, func2 } = require('./func')

const use = () => {
  return func().then(x => {
    return func2().then(y => Promise.resolve(x * y + 1))
  })
}

module.exports = {
  use
}