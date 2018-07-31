const nodeEval = require('node-eval')
const loader = require('.')

describe('buffer-loader', () => {
  it('returns a buffer with the content', () => {
    const contentString = 'some random content'
    const content = Buffer.from(contentString, 'utf-8')
    const output = loader(content)
    const buffer = nodeEval(output)

    expect(buffer).toEqual(content)
    expect(buffer.toString()).toEqual(contentString)
  })
})
