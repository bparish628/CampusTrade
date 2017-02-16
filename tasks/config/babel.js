module.exports = function(grunt) {

  grunt.config.set('babel', {
    dev: {
      extend: '/.babelrc',
      files: [{
        expand: true,
        cwd: 'assets/src/',
        src: ['**/*.js'],
        dest: '.tmp/public/src/',
        ext: '.js'
      }]
    },
    prod: {
      extend: '/.babelrc',
      files: [{
        expand: true,
        cwd: 'assets/src/',
        src: ['.tmp/public/concat/production.js'],
        dest: '.tmp/public/min/production.min.js',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};