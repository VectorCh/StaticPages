module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {																// Task
		  dist: {															// Target
				options: {												// Target options
				  style: 'expanded'
				},
				files: {													// Dictionary of files
				  '../public/gold/styles/style.css': '../public/gold/styles/process/main.scss',	// 'destination': 'source'
				}
		  }
		},
		watch: {
		  scripts: {
				options: { livereload: true },
				// Example: files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
				files: [
					'../public/index.html',
					'../public/gold/styles/process/main.scss',
				],
				tasks: ['sass'], /* Call another action */
		  }
		},

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};