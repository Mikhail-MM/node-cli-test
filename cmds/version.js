const { version } = require('../package.json')
// Destructure from Package JSON directly
module.exports = (args) => {
  console.log(`v${version}`)
}