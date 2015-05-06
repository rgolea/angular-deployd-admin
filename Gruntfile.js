module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/boostrap/dist/js/bootstrap.js',
                    './bower_components/angular/angular.js',
                    './bower_components/angular-resource/angular-resource.js',
                    './bower_components/angular-ui-router/release/angular-ui-router.js',
                    './bower_components/angular-file-data-url/src/*.js',
                    './public/app/**/*.js'
                ],
                dest: './public/dist/script.js'
            },
            css: {
                src: [
                    './bower_components/bootstrap/dist/css/bootstrap.css',
                    './public/css/**/*.css'
                ],
                dest: './public/dist/style.css'
            }
        },
        uglify: {
            js: {
                files: {
                    './public/dist/script.min.js': './public/dist/script.js'
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    './public/dist/style.min.css': './public/dist/style.css'
                }
            }
        },
        watch: {
            scripts: {
                files: ['./public/app/**/*.js'],
                tasks: ['concat', 'uglify']
            },
            css: {
                files: ['./public/css/**/*.css'],
                tasks: ['concat', 'cssmin']
            },
            html: {
                files: ['./public/app/**/*.html'],
                tasks: ['copy:html']
            },
            json: {
                files: ['./public/app/**/*.json'],
                tasks: ['copy:json']
            }
        },
        copy: {
            fonts: {
                cwd: './bower_components/bootstrap/fonts/',
                src: '**',
                dest: './public/fonts/',
                expand: true,
                flatten: true
            },
            html: {
                cwd: './public/app/',
                src: '**/*.html',
                dest: './public/dist/app/',
                expand: true
            },
            json: {
                cwd: './public/app/',
                src: '**/*.json',
                dest: './public/dist/app/',
                expand: true
            }
        }
    });

    //Loading NPM tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //default task
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy']);
};