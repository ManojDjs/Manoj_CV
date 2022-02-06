module.exports = {
 
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Manoj_CV/'
    : '/',

    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(csv|xlsx|xls|pdf)$/,
            loader: 'file-loader',
            options: {
              name: `files/[name].[ext]`
            }
          }
        ],
       },
    },
  };