module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'js/script.js': ['components/js/*.js ']
        }
      } 
    },
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        },
        files: {
          'css/styles.css' : 'components/sass/styles.scss'
        }
      }
    }, 
    watch: {
      options: { 
        livereload: true
      },
      scripts: {
        files: ['components/js/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['components/sass/**/*.scss'],
        tasks: ['compass:dev']
      },
      html: {
        files: ['*.html']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  return grunt.registerTask('default', 'watch');
}; 