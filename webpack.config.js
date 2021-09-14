const path = require('path');

module.exports = {
    // the file that will be looked at first
    entry: './src/index.ts',
    // transport TS into JS
    module: {
        rules: [
            {
                //if file passes this test -being .ts- it well be used, if not, nothing happens
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development',
    // the place where the compiled code will be sent
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
}
