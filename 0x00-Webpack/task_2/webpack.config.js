const path = require('path');

module.exports = {
    mode: 'production', // Set mode to production
    entry: './src/index.js', // Entry point for compilation
    output: {
        filename: 'bundle.js', // Output filename
        path: path.resolve(__dirname, 'public'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Target JavaScript files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel loader
                    options: {
                        presets: ['@babel/preset-env'] // Use the env preset
                    }
                }
            },
            {
                test: /\.css$/, // Target CSS files
                use: ['style-loader', 'css-loader'] // Use style-loader and css-loader
            },
            {
                test: /\.(png|jpe?g|gif)$/, // Target image files
                use: [
                    {
                        loader: 'file-loader', // Use file-loader
                        options: {
                            name: '[name].[ext]', // Keep original file name and extension
                            outputPath: 'images/', // Output directory for images
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
