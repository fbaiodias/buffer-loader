module.exports = function (content) {
  this.cacheable && this.cacheable()
  this.value = content

  return `module.exports = Buffer.from("${content}")`
}

module.exports.raw = true
