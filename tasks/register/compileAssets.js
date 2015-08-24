module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
	    'shell:assetsInstall',
    	'shell:asseticDump',
	]);
};
