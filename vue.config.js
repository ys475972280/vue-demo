module.exports = {
  chainWebpack: (config) => {
    console.log(config)
    const entry = config.entry('app')
    entry.add('babel-polyfill').end()
    entry.add('classlist-polyfill').end()
  }
}
