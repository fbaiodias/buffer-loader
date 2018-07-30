const nodeEval = require('node-eval')
const loader = require('.')

describe('buffer-loader', () => {
  it('returns a buffer with the content', () => {
    const content = 'some random content'
    const output = loader(content)
    const buffer = nodeEval(output)

    expect(buffer.toString()).toEqual(content)
  })
})
