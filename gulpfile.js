'use strict';

var gulp = require('gulp');
var open = require('open');
var app = require('./bower.json');
var packageFile = require('./package.json');

// Load plugins
var $ = require('gulp-load-plugins')();

var server;

var port = {
	app: 9000
};

gulp.task('server:app', function () {
	$.connect.server({
		root: ['app'],
		port: port.app,
		livereload : true
	});
	open('http://localhost:' + port.app + '/#/');
});

// Watch
gulp.task('serve', ['server:app'], function () {
	// Watch for changes in `app` folder
	gulp.watch([
		'app/index.html',
		'app/css/**/style.css',
		'app/src/**/*.html',
		'app/src/**/*.js',
		'app/modules/**/*.js',
		'app/lib/**/*.js'
	], function (event) {
		return gulp.src(event.path)
			.pipe($.connect.reload());
	});
});