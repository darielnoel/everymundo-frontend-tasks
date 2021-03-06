/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

	grunt.config.set('cssmin', {
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
        files: getAssetsFiles(grunt, 'alitalia')
    },
    aereomexico:{
        files: getAssetsFiles(grunt, 'aereomexico')
    },
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};

  var PATHS = {
    // Default Bundle
    default : {
      src: 'TrfxBundle/Resources/public/css-trfx/trfx.css',
      dest: 'src/EM/TrfxBundle/Resources/public/css-trfx'
    },
    // A3 Bundle
    a3 : {
      src: 'TrfxBundle/Resources/public/css/bootstrap.css',
      dest: 'src/EM/TrfxBundle/Resources/public/css/'
    },    
    // Etihad Bundle
    etihad:{
      src: 'TrfxBundle/Resources/public/css-framework/bootstrap.css',
      dest: 'src/EM/TrfxBundle/Resources/public/css-framework/'
    },
    // Airberlin Bundle
    airberlin:{
      src: 'TrfxBundle/Resources/public/css-framework-ab/bootstrap.css',
      dest: 'src/EM/TrfxBundle/Resources/public/css-framework-ab/'
    },
    // Alitalia Bundle
    alitalia:{
      src: 'azTrfxBundle/Resources/public/css-trfx/trfx.css',
      dest: 'src/EM/azTrfxBundle/Resources/public/css-trfx/'
    },
    // Aereomexico Bundle
    aereomexico:{
      src: 'amTrfxBundle/Resources/public/css-framework-trfx/bootstrap.css',
      dest: 'src/EM/amTrfxBundle/Resources/public/css-framework-trfx/'
    }
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
                cwd: grunt.REPOSITORY_PATH  + 'src/EM/',
                src:  [item.src],
                dest: grunt.REPOSITORY_PATH + item.dest,
                ext: '.css',
                flatten: true
            });
        }
      }
    }
    return files;
  }