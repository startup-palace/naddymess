var gulp 			= require('gulp');
var merge 			= require('lodash.merge');
var loadPlugins 	= require('gulp-load-plugins');

var plugins = loadPlugins({
	config: merge(require('./node_modules/@startup-palace/pulp-js/package.json')),
	pattern: ['gulp{-,.}*', '@*/gulp{-,.}*', '*']
});

var manifest = require('./assets-manifest.json');

require('@startup-palace/pulp-js')(gulp, plugins, manifest);
