module.exports = function (grunt) {
  require('time-grunt')(grunt);
  grunt.initConfig({
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
  });
  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ['babel']);
}