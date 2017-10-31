module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		ts: {
			default : {
				src: ["src/scripts/*.ts", "!node_modules/**"],
				dest: "public/scripts",
				options: {
					additionalFlags: '-m "umd"'
				}
			}
		},
		less: {
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'src/styles',
					src: ['*.less'],
					dest: 'public/styles/',
					ext: '.css',
					extDot: 'last'
				}]
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ["assets/**", "styles/*.css", "scripts/*.js"],
					dest: 'public/'
				}]
			}
		},
		watch: {
			ts: {
				files: ["src/scripts/**"],
				tasks: ["ts"]
			},
			copy: {
				files: ["src/assets/**"],
				tasks: ["copy"]
			},
			less: {
				files: ["src/styles/**"],
				tasks: ["less"]
			}
		}

	});
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['ts', 'less', 'copy']);

};