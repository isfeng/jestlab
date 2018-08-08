const { func, func2 } = require('../func')
const { use } = require('../fuse')

test('test func ---', () => {
  return expect(func()).resolves.toBe(123)
})

test('test func ---', () => {
  return expect(func2()).resolves.toBe(246)
})

test('test depdency ---', () => {
  return expect(use()).resolves.toBe(30259)
})