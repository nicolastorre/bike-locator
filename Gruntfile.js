module.exports = function(grunt) {

    grunt.initConfig({
        handlebars: {
            all: {
                options: {
                    namespace: "templates",
                    amd: false,
                    processName: function(filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    }
                },
                files: {
                    "src/templates/hbs_bikeLocator.js": [
                        "src/templates/*.html"
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: ';'
                //banner: ";(function($) {\n'use strict';\n\n",
                //footer: "})(jQuery);"
            },
            dist: {
                src: [
                    'src/templates/hbs_bikeLocator.js',
                    'src/*Controller.js',
                    'src/*Model.js',
                    'src/*View.js',
                    'src/app.js'
                ],
                dest: 'dist/appBikeLocator.js'
            }
        },

        uglify: {
            build: {
                src: 'dist/appBikeLocator.js',
                dest: 'dist/appBikeLocator.min.js'
            }
        },

        watch: {
            scripts: {
                src: [
                    'src/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['handlebars','concat','uglify']);
// grunt.registerTask('dev', ['watch']);

};