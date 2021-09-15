module.exports = {
  webpack: (config) => {
    // fs fix - https://stackoverflow.com/questions/57161839/module-not-found-error-cant-resolve-fs-in
    config.node = {
      net: 'empty',
      tls: 'empty',
      fs: 'empty'
    },
 
    // SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  webpack5: false
}