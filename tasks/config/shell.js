/**
 * Execute shells commands through grunt workflow.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		http://monteiro.github.io/blog/2014/01/02/grunt-watch-plus-symfony/
 */
module.exports = function(grunt) {
	'use strict';
	grunt.config.set('shell', {
    clearCache: {
        options: {
            stdout: true
        },
        command: 'php ' + grunt.REPOSITORY_PATH + 'app/console cache:clear'
    },
    asseticDump: {
        options: {
            stdout: true
        },
        command: 'php ' + grunt.REPOSITORY_PATH + 'app/console assetic:dump'
    },
    assetsInstall: {
        options: {
            stdout: true
        },
        command: 'php '  + grunt.REPOSITORY_PATH + 'app/console assets:install ' + grunt.REPOSITORY_PATH + 'web'
    }
	});

	grunt.loadNpmTasks('grunt-shell');
};
