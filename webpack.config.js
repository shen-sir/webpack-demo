var path = require('path');
console.log(path.resolve(__dirname, 'dist'));
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
  	rules:[
  		{
  			test:/\.css$/,
  			use:[
  				'style-loader',
  				'css-loader'
  			]
  		},
  		{
  			//  \将正则元字符转义
  			test:/\.(png|svg|jpg|gif)$/,
  			use:[
  				'file-loader'
  			]
  		}
  	]
  }
};