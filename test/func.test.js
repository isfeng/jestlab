const { func, func2 } = require('../func')
const { use } = require('../fuse')

jest.mock('../func', () => ({
  func: jest.fn().mockResolvedValue(2),
  func2: jest.fn().mockResolvedValue(4),
}))

test('test func ---', () => {
    return expect(func()).resolves.toBe(2)
})

test('test func ---', () => {
  return expect(func2()).resolves.toBe(4)
})

test('test depdency ---', () => {
  return expect(use()).resolves.toBe(9)
})
