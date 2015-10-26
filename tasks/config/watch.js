/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `src` folder
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		default:{
		    files: [grunt.REPOSITORY_PATH  + 'src/EM/TrfxBundle/Resources/public/less-trfx/**/*.less'],
		    tasks: ['less:default', 'cssmin:default', 'less:a3', 'cssmin:a3', 'compileAssets']	
		},
		a3:{
		    files: [grunt.REPOSITORY_PATH  + 'src/EM/TrfxBundle/Resources/public/less/**/*.less'],
		    tasks: ['less:a3', 'cssmin:a3', 'compileAssets']			
		},
		etihad:{
		    files: [grunt.REPOSITORY_PATH  + 'src/EM/TrfxBundle/Resources/public/less-framework/**/*.less'],
		    tasks: ['less:etihad', 'cssmin:etihad', 'compileAssets']			
		},
		airberlin:{
		    files: [grunt.REPOSITORY_PATH  + 'src/EM/TrfxBundle/Resources/public/less-framework-ab/**/*.less'],
		    tasks: ['less:airberlin', 'cssmin:airberlin', 'compileAssets']			
		},
		alitalia:{
		    files: [grunt.REPOSITORY_PATH  + 'src/EM/azTrfxBundle/Resources/public/less-trfx/**/*.less'],
		    //tasks: ['less:alitalia', 'cssmin:alitalia', 'uglify:alitalia', 'compileAssets'],
		    tasks: ['less:alitalia', 'cssmin:alitalia', 'compileAssets']
		},
		aereomexico:{
		    files: [grunt.REPOSITORY_PATH  + 'src/EM/amTrfxBundle/Resources/public/less-framework-trfx/**/*.less'],
		    tasks: ['less:aereomexico', 'cssmin:aereomexico', 'compileAssets']			
		},		
		dev: {
			// Watching for less files:
			files: [
				grunt.REPOSITORY_PATH  + 'src/EM/**/*.twig',
			],

			// When assets are changed:
			tasks: ['compileAssets'],
		    options: {
      			livereload: true,
    		}

		}
	});

	grunt.event.on('watch', function(action, filepath, target) {
	    //change the source and destination in the uglify task at run time so that it affects the changed file only
	    var currentAirline = whatAirlineWasChanged(filepath);
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};

function whatAirlineWasChanged(filepath){
	var currentAirline = '',
		defaultTrfx = 'TrfxBundle/Resources/public/less-trfx',
		a3 = 'TrfxBundle/Resources/public/less/',
		etihad = 'TrfxBundle/Resources/public/less-framework/',
		airberlin = 'TrfxBundle/Resources/public/less-framework-ab/',
		aereomexico = 'amTrfxBundle/Resources/public/less-framework-trfx/',
		alitalia = 'azTrfxBundle/Resources/public/less-framework/';

	// default trfx
	if( isContained(filepath, defaultTrfx) ){
		currentAirline =  'default';
	} else if ( isContained(filepath, a3) ){
		currentAirline =  'a3';
	} else if( isContained(filepath, etihad) ){
		currentAirline =  'etihad';
	} 
	else if( isContained(filepath, airberlin) ){
		currentAirline =  'airberlin';
	} else if( isContained(filepath, alitalia) ){
		currentAirline =  'alitalia';
	} else if( isContained(filepath, aereomexico) ){
		currentAirline =  'aereomexico';
	} 
	return currentAirline;
}

function isContained(text, findSubstring){
	if(text.indexOf(findSubstring) > -1 || text.indexOf(getWindowsVersionOf(findSubstring)) > -1){
		return true;
	}

	return false;
}

function getWindowsVersionOf(character){
	return character.split('/').join('\\');
}
