module.exports = function (grunt) {
  require('time-grunt')(grunt)
  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/create-tab.min.js': ['dist/create-tab.js']
        }
      }
    },
    babel: {
      options: {
        presets: ['babel-preset-es2015-script']
      },
      dist: {
        files: {
          'dist/create-tab.js': 'src/create-tab.js'
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-babel')
  grunt.registerTask('default', ['babel', 'uglify'])
}
