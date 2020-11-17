'use strict';

module.exports = function (grunt) {
   // Time how long task take, Can help when optimizing build times
   require('time-grunt')(grunt);

   // Automically load required Grunt tasks
   require('jit-grunt')(grunt);

   // Define the configuration for all the task
   grunt.initConfig({
      sass: {
         options: {
            implementation: require('node-sass'),
            sourceMap: true
         },
         dist: {
            files: {
               'css/styles.css': 'css/styles.scss'
            }
         }
      },
      watch: {
         files: 'css/*.scss',
         tasks: ['sass']
      },
      browserSync: {
         bsFiles: {
            src: [
               'css/*.css',
               '*.html',
               'js/*.js'
            ]
         },
         options: {
            watchTask: true,
            server: {
               baseDir: "./"
            }
         }
      }
   });

   grunt.registerTask('css', ['sass']);
   grunt.registerTask('default', ['browserSync', 'watch']);
};
