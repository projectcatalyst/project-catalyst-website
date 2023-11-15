module.exports = {
  webpack: (config) => {
     // SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}