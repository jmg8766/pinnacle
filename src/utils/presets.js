const colors = require(`./colors`).default

module.exports = {
  colors,
  mq: {
    mobile: `@media (min-width: 400px)`,
    phablet: `@media (min-width: 550px`,
    tablet: `@media (min-width: 750px)`,
    desktop: `@media (min-width: 1000px)`,
    xl: `@media (min-width: 1200px)`,
    xxl: `@media (min-width: 1600px)`,
  },
  gutter: {
    default: `1.25rem`,
    tablet: `2.5rem`,
    desktop: `3.75rem`,
  },
}
