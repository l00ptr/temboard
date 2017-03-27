module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      // this is the "dev" Sass config used with "grunt watch" command
      dev: {
        options: {
          style: 'expanded',
          // tell Sass to look in the Bootstrap stylesheets directory when
          // compiling
          loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
        },
        files: {
          'temboardui/static/css/temboard.css': 'temboardui/static/sass/temboard.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
        },
        files: {
          'temboardui/static/css/temboard.css': 'temboardui/static/sass/temboard.scss'
        }
      }
    },
    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/',
        src: ['*'],
        dest: 'temboardui/static/fonts/'
      }
    },
    // configure the "grunt watch" task
    watch: {
      sass: {
        files: 'temboardui/static/sass/*.scss',
        tasks: ['sass:dev']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('bootstrap', ['copy:bootstrap', 'sass:dist']);
};
