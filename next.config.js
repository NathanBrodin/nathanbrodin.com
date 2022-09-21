const nextTranslate = require('next-translate')

module.exports = nextTranslate()

// Or if you already have next.config.js file and want to keep the changes in it, pass the config object to the nextTranslate(). For example for webpack you could do it like this:
// const nextTranslate = require('next-translate')

// module.exports = nextTranslate({
//   webpack: (config, { isServer, webpack }) => {
//     return config;
//   }
// })