module.exports = function(content) {
  this.cacheable && this.cacheable();
  this.value = content;

  return 'module.exports = new Buffer("' + content.toString('base64') + '", "base64")';
};

module.exports.raw = true;
