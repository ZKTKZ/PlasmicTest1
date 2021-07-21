
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['fbP1ByGQRdfWgZtdq1K2wo'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  