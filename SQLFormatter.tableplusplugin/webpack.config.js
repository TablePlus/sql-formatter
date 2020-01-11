const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './main.js',
    output: {
    	path: path.resolve(__dirname, './'),
    	filename: './format.js'
    },
    mode: 'production'
};

module.exports = config;