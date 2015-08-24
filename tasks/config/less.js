/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function(grunt) {
	'use strict';

	grunt.config.set('less', {
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
	   options: {
	       cleancss: true
	   }
	});

	grunt.loadNpmTasks('grunt-contrib-less');
};

  var PATHS = {
    // Default Bundle
    default : {
      src: 'TrfxBundle/Resources/public/less-trfx/trfx.less',
      dest: 'src/EM/TrfxBundle/Resources/public/css-trfx'
    },
    // A3 Bundle
    a3 : {
      src: 'TrfxBundle/Resources/public/less/bootstrap.less',
      dest: 'src/EM/TrfxBundle/Resources/public/css/'
    },    
    // Etihad Bundle
    etihad:{
      src: 'TrfxBundle/Resources/public/less-framework/bootstrap.less',
      dest: 'src/EM/TrfxBundle/Resources/public/css-framework/'
    },
    // Airberlin Bundle
    airberlin:{
      src: 'TrfxBundle/Resources/public/less-framework-ab/bootstrap.less',
      dest: 'src/EM/TrfxBundle/Resources/public/css-framework-ab/'
    },
    // Alitalia Bundle
    alitalia:{
      src: 'azTrfxBundle/Resources/public/less-framework/bootstrap.less',
      dest: 'src/EM/azTrfxBundle/Resources/public/css-framework/'
    },
    // Aereomexico Bundle
    aereomexico:{
      src: 'amTrfxBundle/Resources/public/less-framework-trfx/bootstrap.less',
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
