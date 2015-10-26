/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
	    default:{
	        files: getAssetsFiles(grunt, 'default') 
	    },
	    a3:{
	        files: getAssetsFiles(grunt, 'a3')
	    },
	    etihad:{
	        files: getAssetsFiles(grunt, 'etihad')
	    },
	    airberlin:{
	        files: getAssetsFiles(grunt, 'airberlin')
	    },

	    alitalia:{
			options: {
				mangle: true,
                compress: {
                    conditionals:false,
				    drop_console: true,
                    unused:false,
                    join_vars: false,
                    sequences: false
				}
			},
	        files: getAssetsFiles(grunt, 'alitalia')
	    },
	    aereomexico:{
	        files: getAssetsFiles(grunt, 'aereomexico')
	    },
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};

  var PATHS = {
    // Default Bundle
    default : {
      src: 'TrfxBundle/Resources/public/css-trfx/trfx.css',
      dest: 'src/EM/TrfxBundle/Resources/public/css-trfx'
    },
    // A3 Bundle
    // a3 : {
    //   src: 'TrfxBundle/Resources/public/css/bootstrap.css',
    //   dest: 'src/EM/TrfxBundle/Resources/public/css/'
    // },    
    // Etihad Bundle
    // etihad:{
    //   src: 'TrfxBundle/Resources/public/css-framework/bootstrap.css',
    //   dest: 'src/EM/TrfxBundle/Resources/public/css-framework/'
    // },
    // // Airberlin Bundle
    // airberlin:{
    //   src: 'TrfxBundle/Resources/public/css-framework-ab/bootstrap.css',
    //   dest: 'src/EM/TrfxBundle/Resources/public/css-framework-ab/'
    // },
    // Alitalia Bundle
    alitalia:{

      src: ['azTrfxBundle/Resources/public/js/az/src/'],
      dest: 'azTrfxBundle/Resources/public/js/az/build/'
    },
    // Aereomexico Bundle
    // aereomexico:{
    //   src: 'amTrfxBundle/Resources/public/css-framework-trfx/bootstrap.css',
    //   dest: 'src/EM/amTrfxBundle/Resources/public/css-framework-trfx/'
    // }
  };

  function getAssetsFiles(grunt, airline){
    var files = [],
        item,
        key;
    for (key in PATHS) {
      if (PATHS.hasOwnProperty(key)){
        if(key === airline){
            item = PATHS[key];
            files.push({
                expand: true,
                cwd: grunt.REPOSITORY_PATH  + 'src/EM/' + item.src,
                src:  '**/*.js',
                dest: grunt.REPOSITORY_PATH  + 'src/EM/' + item.dest,
                //grunt.REPOSITORY_PATH  + 'src/EM/' + item.dest,
                ext: '.js'
            });
        }
      }
    }
    return files;
  }
