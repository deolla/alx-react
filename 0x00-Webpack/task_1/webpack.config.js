const path = require('path');

module.exports = {
    mode: 'production', // Set mode to production
    entry: './js/dashboard_main.js', // Entry point for compilation
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
            }
        ]
    }
};
