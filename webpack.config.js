var config = {
   entry: './src/index.js',
	
   output: {
      path: __dirname + '/public/',
      filename: 'bundle.js'
   },
	
   devServer: {
      inline: true,
      port: 9000,
      contentBase: __dirname + '/public/'
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               cacheDirectory: true,
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;